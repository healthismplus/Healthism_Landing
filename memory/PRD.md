# HealthismPlus Marketing Website - PRD

## Original Problem Statement
Build a complete MERN stack marketing website for HealthismPlus, a premium Indian health-tech brand. Use React frontend with Framer Motion animations, Tailwind CSS for styling. Requirements include specific sections (Hero, USP, Hospital Management, Corporate Solutions, Fad 2 Fit, Subscription Plans, Partner Network, Team, Contact), brand colors (Teal, Navy, White), and modern UI patterns (glassmorphism, interactive animations). Form submissions should save to MongoDB and send email notifications.

## Tech Stack
- **Frontend**: React, Tailwind CSS, Framer Motion, Shadcn/UI components
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Email Service**: Mailgun EU API
- **Fonts**: Raleway (Headings), Merriweather (Body)

## Core Features Implemented

### Completed (December 2025)
- [x] Multi-section landing page with smooth scroll navigation
- [x] Hero section with animated stats counters
- [x] USP cards with hover animations
- [x] Hospital Management section with live dashboard mockup
- [x] Corporate Wellness Solutions section
- [x] Fad 2 Fit gamification timeline
- [x] HealthismPlus Kart discount cards
- [x] Subscription Plans horizontal scroll
- [x] Partner Network with marquee animation
- [x] Recognition badges section
- [x] Leadership section (Kashyap & Yamini only)
- [x] Dedicated Team Page with all team members
- [x] Contact form with MongoDB storage
- [x] Mailgun EU email notifications on form submission
- [x] Responsive navigation with mobile menu
- [x] Footer with social links

### UI/UX Fixes Completed (Latest)
- [x] Team Page scrolls to top on navigation
- [x] Image cropping fixed (object-top) for all team member photos
- [x] Sipra Pandey image position fixed (object-center to show face properly)
- [x] Leadership section shows only 2 members (Kashyap & Yamini) centered
- [x] Rina Dedhia designation updated (removed "(Nashik)")
- [x] Sanskar Dubey added as Growth Partner (with LinkedIn)
- [x] Anjali Rai added as Wellness Expert in Health & Wellness Consultants section
- [x] Mailgun recipient switched to production (info@healthismplus.com)

## Architecture

```
/app/
├── backend/
│   ├── .env (MONGO_URL, MAILGUN credentials)
│   ├── requirements.txt
│   └── server.py (FastAPI, MongoDB, Mailgun EU)
├── frontend/
│   ├── .env (REACT_APP_BACKEND_URL)
│   ├── package.json
│   ├── public/
│   │   ├── logo.png
│   │   └── team/ (all team member photos)
│   └── src/
│       ├── App.js (main landing page)
│       ├── App.css (animations)
│       └── pages/TeamPage.js
```

## API Endpoints
- `POST /api/contact` - Submit contact form, saves to MongoDB, sends Mailgun email

## Database Schema
```
contacts: {
  name: string,
  email: string,
  phone: string,
  company: string,
  message: string,
  timestamp: datetime
}
```

## Team Structure (Current)

### Leadership (App.js - Homepage)
1. Kashyap Thakkar - Founder & Director
2. Yamini Dove - Co-Founder & Director

### Full Team (TeamPage.js)
- Leadership: Kashyap, Yamini, Piyush Kothari, Sandeep Ahuja
- Strategic Advisors: Chirag Jhumkhawwala, Naina Singhania, Sanam Manchanda
- Key Personnel: Rachna Doshi, Sipra Pandey, Rina Dedhia, Sanskar Dubey, Anjali Rai
- Technology Team: Raveena Mishra, Shreyas Kalate, Vighnesh Rane, Ayush Mer, Yash Bhatt, Priyal Mohod, Durva Amrutkar
- Consultants: Samruddhi Shinde, Jinal Jain

## Upcoming Tasks (P1)
- [x] Switch Mailgun test email to production (info@healthismplus.com) - DONE

## Future/Backlog
- [ ] Optional: Break down App.js into smaller components for maintainability
- [ ] Add blog section
- [ ] Add testimonials section
- [ ] SEO optimization

## Notes
- Mailgun is configured for EU region (api.eu.mailgun.net)
- Contact form currently sends to test email for verification
