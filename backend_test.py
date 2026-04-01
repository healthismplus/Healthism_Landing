#!/usr/bin/env python3

import requests
import sys
import json
from datetime import datetime
from typing import Dict, Any

class HealthismPlusAPITester:
    def __init__(self, base_url="https://wellness-ecosystem-2.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name: str, success: bool, details: Dict[str, Any] = None):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
        
        result = {
            "test_name": name,
            "success": success,
            "timestamp": datetime.now().isoformat(),
            "details": details or {}
        }
        self.test_results.append(result)
        
        status = "✅ PASSED" if success else "❌ FAILED"
        print(f"{status} - {name}")
        if details:
            for key, value in details.items():
                print(f"  {key}: {value}")
        print()

    def test_api_root(self):
        """Test API root endpoint"""
        try:
            response = requests.get(f"{self.api_url}/", timeout=10)
            success = response.status_code == 200
            
            details = {
                "status_code": response.status_code,
                "response": response.json() if success else response.text[:200]
            }
            
            self.log_test("API Root Endpoint", success, details)
            return success
        except Exception as e:
            self.log_test("API Root Endpoint", False, {"error": str(e)})
            return False

    def test_status_endpoints(self):
        """Test status check endpoints"""
        # Test POST /api/status
        try:
            test_data = {"client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"}
            response = requests.post(f"{self.api_url}/status", json=test_data, timeout=10)
            
            success = response.status_code == 200
            details = {
                "status_code": response.status_code,
                "request_data": test_data
            }
            
            if success:
                response_data = response.json()
                details["response_id"] = response_data.get("id")
                details["client_name"] = response_data.get("client_name")
            else:
                details["error"] = response.text[:200]
            
            self.log_test("POST /api/status", success, details)
            
            # Test GET /api/status
            if success:
                get_response = requests.get(f"{self.api_url}/status", timeout=10)
                get_success = get_response.status_code == 200
                
                get_details = {
                    "status_code": get_response.status_code,
                    "records_count": len(get_response.json()) if get_success else 0
                }
                
                self.log_test("GET /api/status", get_success, get_details)
                return success and get_success
            
            return success
            
        except Exception as e:
            self.log_test("Status Endpoints", False, {"error": str(e)})
            return False

    def test_contact_form_endpoint(self):
        """Test contact form submission endpoint"""
        try:
            # Test data for contact form
            test_data = {
                "name": "Test User",
                "email": "test@example.com",
                "phone": "+1234567890",
                "company": "Test Company",
                "message": "This is a test message from automated testing."
            }
            
            response = requests.post(f"{self.api_url}/contact", json=test_data, timeout=15)
            
            success = response.status_code == 200
            details = {
                "status_code": response.status_code,
                "request_data": test_data
            }
            
            if success:
                response_data = response.json()
                details["response_id"] = response_data.get("id")
                details["name"] = response_data.get("name")
                details["email"] = response_data.get("email")
                details["timestamp"] = response_data.get("timestamp")
            else:
                details["error"] = response.text[:200]
            
            self.log_test("POST /api/contact", success, details)
            return success
            
        except Exception as e:
            self.log_test("Contact Form Endpoint", False, {"error": str(e)})
            return False

    def test_contact_form_validation(self):
        """Test contact form validation with invalid data"""
        try:
            # Test with missing required fields
            invalid_data = {
                "name": "",  # Empty name
                "email": "invalid-email",  # Invalid email format
                "phone": "",  # Empty phone
                "company": "",  # Empty company
                "message": ""  # Empty message
            }
            
            response = requests.post(f"{self.api_url}/contact", json=invalid_data, timeout=10)
            
            # Should return 422 for validation error
            success = response.status_code == 422
            details = {
                "status_code": response.status_code,
                "expected_status": 422,
                "validation_working": success
            }
            
            if response.status_code == 422:
                try:
                    error_details = response.json()
                    details["validation_errors"] = error_details.get("detail", [])
                except:
                    details["response"] = response.text[:200]
            
            self.log_test("Contact Form Validation", success, details)
            return success
            
        except Exception as e:
            self.log_test("Contact Form Validation", False, {"error": str(e)})
            return False

    def test_cors_headers(self):
        """Test CORS headers are properly set"""
        try:
            response = requests.options(f"{self.api_url}/contact", timeout=10)
            
            cors_headers = {
                "Access-Control-Allow-Origin": response.headers.get("Access-Control-Allow-Origin"),
                "Access-Control-Allow-Methods": response.headers.get("Access-Control-Allow-Methods"),
                "Access-Control-Allow-Headers": response.headers.get("Access-Control-Allow-Headers")
            }
            
            # Check if CORS is properly configured
            success = bool(cors_headers["Access-Control-Allow-Origin"])
            
            details = {
                "status_code": response.status_code,
                "cors_headers": cors_headers
            }
            
            self.log_test("CORS Configuration", success, details)
            return success
            
        except Exception as e:
            self.log_test("CORS Configuration", False, {"error": str(e)})
            return False

    def run_all_tests(self):
        """Run all backend API tests"""
        print("🚀 Starting HealthismPlus Backend API Tests")
        print("=" * 50)
        
        # Test API connectivity first
        if not self.test_api_root():
            print("❌ API is not accessible. Stopping tests.")
            return False
        
        # Run all tests
        self.test_status_endpoints()
        self.test_contact_form_endpoint()
        self.test_contact_form_validation()
        self.test_cors_headers()
        
        # Print summary
        print("=" * 50)
        print(f"📊 Test Summary: {self.tests_passed}/{self.tests_run} tests passed")
        
        success_rate = (self.tests_passed / self.tests_run) * 100 if self.tests_run > 0 else 0
        print(f"📈 Success Rate: {success_rate:.1f}%")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All tests passed!")
            return True
        else:
            print("⚠️  Some tests failed. Check the details above.")
            return False

def main():
    """Main function to run the tests"""
    tester = HealthismPlusAPITester()
    success = tester.run_all_tests()
    
    # Save test results to file
    with open("/app/test_reports/backend_test_results.json", "w") as f:
        json.dump({
            "timestamp": datetime.now().isoformat(),
            "total_tests": tester.tests_run,
            "passed_tests": tester.tests_passed,
            "success_rate": (tester.tests_passed / tester.tests_run) * 100 if tester.tests_run > 0 else 0,
            "test_results": tester.test_results
        }, f, indent=2)
    
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())