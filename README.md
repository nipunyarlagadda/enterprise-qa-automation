# Enterprise QA Automation Framework

![Playwright Tests](https://github.com/nipunyarlagadda/enterprise-qa-automation/actions/workflows/playwright.yml/badge.svg)

## Project Overview

An enterprise-style QA automation framework designed to validate application quality across the UI, API, and database layers.

The framework demonstrates real-world testing practices including automated regression testing, backend data validation, API verification, cross-browser execution, and continuous integration using GitHub Actions.

A full-stack QA automation framework built with **Playwright, TypeScript, API Testing, PostgreSQL Database Validation, and GitHub Actions CI/CD**.

This project demonstrates automated testing across multiple application layers:

- UI Testing
- API Testing
- Database Validation
- Agile QA Documentation
- Continuous Integration

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Playwright | UI and API Automation |
| TypeScript | Programming Language |
| Node.js | Runtime Environment |
| PostgreSQL | Database Validation |
| Git | Version Control |
| GitHub Actions | CI/CD Pipeline |
| VS Code | Development Environment |

---

## Project Features

### UI Automation

Implemented browser automation using Playwright with the Page Object Model design pattern.

Covered scenarios:

- Successful user login
- Negative login validation
- Cross-browser testing

Supported browsers:

- Chromium
- Firefox
- WebKit

---

### API Automation

Automated REST API testing using Playwright APIRequestContext.

Covered:

- GET API validation
- POST API validation
- HTTP response validation
- Response payload verification

---

### Database Testing

Integrated PostgreSQL database validation.

Capabilities:

- Database connection handling
- SQL query execution
- Backend data verification
- User record validation

Database validation verifies backend data integrity by connecting to PostgreSQL and executing SQL queries against test data.

---

## Project Structure

```
enterprise-qa-automation
│
├── pages
│   └── LoginPage.ts
│
├── tests
│   ├── login.spec.ts
│   └── negative-login.spec.ts
│
├── api
│   ├── user-api.spec.ts
│   └── post-api.spec.ts
│
├── database
│   ├── db-connection.ts
│   └── database-validation.spec.ts
│
├── docs
│   ├── user-stories.md
│   ├── test-cases.md
│   ├── bug-report.md
│   └── sprint-plan.md
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/nipunyarlagadda/enterprise-qa-automation.git
```

### Navigate Into Project

```bash
cd enterprise-qa-automation
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

### Environment Configuration

Create a `.env` file:

```
DB_USER=postgres
DB_HOST=localhost
DB_NAME=postgres
DB_PASSWORD=your_password
DB_PORT=5432
```

For CI/CD, GitHub Actions automatically provisions PostgreSQL and injects database environment variables during test execution.

---

## Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run UI Login Tests

```bash
npx playwright test tests/login.spec.ts
```

### Run Negative Login Tests

```bash
npx playwright test tests/negative-login.spec.ts
```

### Run API Tests

```bash
npx playwright test api
```

### Run Database Tests

```bash
npx playwright test database
```

---

## Test Reporting

Generate HTML reports:

```bash
npx playwright show-report
```

Reports include:

- Test execution results
- Screenshots
- Browser information
- Failed test traces
- Error details

---

## CI/CD Pipeline

GitHub Actions automatically executes the complete test suite when code is pushed.

Pipeline workflow:

```
Code Push
   │
   ▼
GitHub Actions Triggered
   │
   ▼
Install Dependencies
   │
   ▼
Install Playwright Browsers
   │
   ▼
Start PostgreSQL Test Database
   │
   ▼
Create Test Data
   │
   ▼
Execute Automated Tests
   │
   ▼
Generate Test Report
```

Current CI coverage:

| Test Area | Status |
|---|---|
| UI Automation | ✅ Passing |
| API Testing | ✅ Passing |
| Database Validation | ✅ Passing |
| Cross Browser Testing | ✅ Passing |
| CI/CD Pipeline | ✅ Passing |

---

## Test Execution Results

Latest CI pipeline execution:

- Total Tests: 15
- Passed: 15
- Failed: 0
- Browsers Tested:
  - Chromium
  - Firefox
  - WebKit

All automated tests successfully execute through GitHub Actions CI/CD.

---

## QA Documentation

This project follows Agile QA practices:

- User Stories
- Acceptance Criteria
- Test Cases
- Bug Reporting
- Sprint Planning
- Regression Testing

Documentation is available in the `docs` directory.

---

## Author

**Nipun Yarlagadda**

QA Automation Engineer Portfolio Project

Technical Skills Demonstrated:

- Playwright
- TypeScript
- JavaScript/Node.js
- API Testing
- PostgreSQL
- SQL Validation
- Git/GitHub
- GitHub Actions CI/CD
- Page Object Model
- Agile QA Practices
