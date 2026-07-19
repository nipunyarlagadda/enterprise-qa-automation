# Test Cases - QA Automation Project

## Test Suite: User Authentication

## TC-001: Successful Login

**Related User Story:** US-001

**Test Scenario:**
Verify that a valid user can login successfully.

**Preconditions:**

- Application is available
- Valid user account exists

**Test Steps:**

1. Open login page
2. Enter valid username
3. Enter valid password
4. Click login button

**Expected Result:**

- User successfully logs in
- Inventory page is displayed

**Automation Status:**
Implemented

## **Automation File:**

## TC-002: Locked User Login Failure

**Related User Story:** US-002

**Test Scenario:**
Verify that locked users cannot access the application.

**Preconditions:**

- Application is available
- Locked user account exists

**Test Steps:**

1. Open login page
2. Enter locked username
3. Enter locked password
4. Click login button

**Expected Result:**

- Login attempt fails
- Error message is displayed
- User remains on login page

**Automation Status:**
Implemented

**Automation File:**

tests/negative-login.spec.ts

---

## TC-003: Retrieve User API Data

**Related User Story:** US-003

**Test Scenario:**
Verify that the GET user API returns valid user information.

**Preconditions:**

- API endpoint is available

**Test Steps:**

1. Send GET request to user endpoint
2. Validate HTTP response status
3. Validate response body fields

**Expected Result:**

- API returns HTTP status 200
- User information is returned
- Response fields contain expected values

**Automation Status:**
Implemented

**Automation File:**

api/user-api.spec.ts

---

## TC-004: Create Record Through API

**Related User Story:** US-003

**Test Scenario:**
Verify that a POST API request can create a new record.

**Preconditions:**

- API endpoint is available

**Test Steps:**

1. Send POST request with JSON payload
2. Validate response status
3. Validate returned response data

**Expected Result:**

- API returns HTTP status 201
- New record information is returned
- Response data matches request payload

**Automation Status:**
Implemented

**Automation File:**

api/post-api.spec.ts

---

## TC-005: Validate User Record in Database

**Related User Story:** US-004

**Test Scenario:**
Verify that user information is stored correctly in the database.

**Preconditions:**

- PostgreSQL database is available
- User record exists

**Test Steps:**

1. Connect to PostgreSQL database
2. Execute SQL query
3. Retrieve user record
4. Validate database values

**Expected Result:**

- Database connection is successful
- User record exists
- Email and status values match expected results

**Automation Status:**
Implemented

## **Automation File:**

## TC-005: Validate User Record in Database

**Related User Story:** US-004

**Test Scenario:**
Verify that user information is stored correctly in the database.

**Preconditions:**

- PostgreSQL database is running
- qa_database exists
- users table exists
- Test user record exists

**Test Steps:**

1. Connect to PostgreSQL database
2. Execute SQL query to retrieve user data
3. Validate returned database record
4. Compare database values against expected results

**SQL Validation:**

```sql
SELECT * FROM users
WHERE username = 'testuser';
```
