# User Stories - QA Automation Project

## Epic: User Authentication System

### User Story 1: Successful Login

**ID:** US-001

**As a** registered user  
**I want to** login with valid credentials  
**So that** I can access my account dashboard.

### Acceptance Criteria

- User can enter username and password
- System authenticates valid credentials
- User is redirected to the inventory/dashboard page
- No error message is displayed

---

## User Story 2: Locked User Restriction

**ID:** US-002

**As a** system administrator  
**I want to** prevent locked users from accessing the application  
**So that** unauthorized users cannot login.

### Acceptance Criteria

- Locked users cannot access the application
- System displays an appropriate error message
- User remains on the login page

---

## User Story 3: API User Management

**ID:** US-003

**As a** backend service consumer  
**I want to** create and retrieve user data through APIs  
**So that** applications can communicate reliably.

### Acceptance Criteria

- GET API returns user information
- POST API creates a new record
- API returns correct HTTP status codes
- Response data matches expected format

---

## User Story 4: Database Data Validation

**ID:** US-004

**As a** QA engineer  
**I want to** validate database records  
**So that** stored application data is accurate.

### Acceptance Criteria

- Database connection is successful
- User records can be retrieved
- Stored values match expected results
