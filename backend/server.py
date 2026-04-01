from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone
import asyncio
import requests
import certifi


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(
    mongo_url,
    tls=True,
    tlsCAFile=certifi.where()
)
db = client[os.environ['DB_NAME']]

# print(f"Connected to MongoDB at {mongo_url}")
# Mailgun setup
MAILGUN_API_KEY = os.environ.get('MAILGUN_API_KEY')
MAILGUN_DOMAIN = os.environ.get('MAILGUN_DOMAIN')
MAILGUN_SENDER_EMAIL = os.environ.get('MAILGUN_SENDER_EMAIL', 'noreply@mg.healthismplus.com')
# RECIPIENT_EMAIL = 'info@healthismplus.com'  # Production email
RECIPIENT_EMAIL = '0yashbhatt0@gmail.com'  # Production email

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form Models
class ContactFormSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    company: str
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactFormCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    company: str
    message: str

# Add your routes to the router instead of directly to app

@app.on_event("startup")
async def test_db():
    try:
        await client.admin.command("ping")
        print("✅ MongoDB Connected Successfully")
    except Exception as e:
        print("❌ MongoDB Connection Failed:", e)
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Contact Form Endpoint
@api_router.post("/contact", response_model=ContactFormSubmission)
async def submit_contact_form(input: ContactFormCreate):
    contact_dict = input.model_dump()
    contact_obj = ContactFormSubmission(**contact_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = contact_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    # Save to MongoDB
    _ = await db.contacts.insert_one(doc)
    print("Saved (mock):", doc)
    
    # Send email notification in background
    try:
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: 'Merriweather', Arial, sans-serif; background-color: #F4F8F7; margin: 0; padding: 20px; }}
                .container {{ max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }}
                .header {{ background: linear-gradient(135deg, #091A3A 0%, #0F2A5C 100%); color: white; padding: 24px; border-radius: 8px; margin-bottom: 24px; }}
                .logo {{ font-family: 'Raleway', Arial, sans-serif; font-size: 28px; font-weight: 800; }}
                .plus {{ color: #1AAC8B; }}
                .field {{ margin-bottom: 16px; }}
                .label {{ color: #6B7A99; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }}
                .value {{ color: #091A3A; font-size: 16px; font-weight: 500; }}
                .footer {{ margin-top: 32px; padding-top: 20px; border-top: 1px solid #E5E7EB; color: #6B7A99; font-size: 14px; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="logo">healthism<span class="plus">+</span></div>
                    <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;">New Contact Form Submission</p>
                </div>
                
                <div class="field">
                    <div class="label">Name</div>
                    <div class="value">{input.name}</div>
                </div>
                
                <div class="field">
                    <div class="label">Email</div>
                    <div class="value">{input.email}</div>
                </div>
                
                <div class="field">
                    <div class="label">Phone</div>
                    <div class="value">{input.phone}</div>
                </div>
                
                <div class="field">
                    <div class="label">Company</div>
                    <div class="value">{input.company}</div>
                </div>
                
                <div class="field">
                    <div class="label">Message</div>
                    <div class="value">{input.message}</div>
                </div>
                
                <div class="footer">
                    Submitted on {datetime.now(timezone.utc).strftime('%B %d, %Y at %I:%M %p UTC')}
                </div>
            </div>
        </body>
        </html>
        """
        
        # Send via Mailgun API (EU region)
        mailgun_url = f"https://api.eu.mailgun.net/v3/{MAILGUN_DOMAIN}/messages"
        
        data = {
            "from": f"HealthismPlus <{MAILGUN_SENDER_EMAIL}>",
            "to": RECIPIENT_EMAIL,
            "subject": f"New Contact Form Submission from {input.name}",
            "html": html_content
        }
        
        logger.info(f"Attempting to send email via Mailgun EU to {RECIPIENT_EMAIL}")
        logger.info(f"Using domain: {MAILGUN_DOMAIN}")
        
        response = await asyncio.to_thread(
            requests.post,
            mailgun_url,
            auth=("api", MAILGUN_API_KEY),
            data=data
        )
        
        if response.status_code == 200:
            logger.info(f"✅ Email sent successfully via Mailgun for contact from {input.email}")
        else:
            logger.error(f"Mailgun API error: {response.status_code} - {response.text}")
            logger.error(f"URL used: {mailgun_url}")
            logger.error(f"API Key starts with: {MAILGUN_API_KEY[:10] if MAILGUN_API_KEY else 'None'}...")
            
    except Exception as e:
        logger.error(f"Failed to send email via Mailgun: {str(e)}")
        # Don't fail the request if email fails
    
    return contact_obj

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()