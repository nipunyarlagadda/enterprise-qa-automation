# Bug Report - QA Automation Project

## Bug ID: BUG-001

**Title:**
Locked user can access login page but authentication should fail

**Severity:**
High

**Priority:**
High

**Environment:**

- Application: QA Testing Environment
- Browser: Chromium
- Automation Framework: Playwright
- Operating System: Windows

---

## Description

A locked user account should not be able to successfully authenticate into the application. The system must display an appropriate error message when a locked user attempts to login.

---

## Steps to Reproduce

1. Navigate to the login page
2. Enter locked user credentials
3. Click the Login button
4. Observe the application response

---

## Expected Result

- Login should fail
- User should remain on the login page
- Error message should be displayed

---

## Actual Result

- User authentication behavior does not match expected requirements

---

## Test Case Reference

TC-002: Locked User Login Failure

---

## Automation Reference

tests/negative-login.spec.ts

---

## Status

Closed
