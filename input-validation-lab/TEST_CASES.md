# Input Validation Test Cases

Test all these scenarios using Postman, curl, or your preferred API testing tool.

## Server Health Check

### Request
```
GET http://localhost:3000/
```

### Expected Response (200 OK)
```json
{
  "success": true,
  "message": "Input Validation Lab - API Server is running",
  "endpoints": {
    "health": "GET /",
    "register": "POST /api/users/register",
    "getAllUsers": "GET /api/users",
    "getUserById": "GET /api/users/:id",
    "deleteUser": "DELETE /api/users/:id"
  }
}
```

---

## TEST CASE 1: Valid Registration

### Request
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "name": "Alice Johnson",
  "email": "alice.johnson@example.com",
  "password": "SecurePassword123"
}
```

### Expected Response (201 Created)
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "createdAt": "2024-05-14T10:30:00.000Z"
  }
}
```

### What This Tests
✅ Valid input passes all validation checks
✅ User is created successfully
✅ Correct 201 status code returned
✅ Response contains created user data

---

## TEST CASE 2: Missing Name Field

### Request
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "email": "bob@example.com",
  "password": "ValidPassword123"
}
```

### Expected Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Name is required"
  ]
}
```

### What This Tests
✅ Validation catches missing required fields
✅ Request is rejected before reaching controller
✅ Clear error message about missing field

---

## TEST CASE 3: Missing Email Field

### Request
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "name": "Carol Smith",
  "password": "ValidPassword123"
}
```

### Expected Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Email is required"
  ]
}
```

### What This Tests
✅ Email field is required
✅ Validation prevents missing email

---

## TEST CASE 4: Missing Password Field

### Request
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "name": "David Brown",
  "email": "david@example.com"
}
```

### Expected Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Password is required"
  ]
}
```

### What This Tests
✅ Password field is required
✅ Validation prevents missing password

---

## TEST CASE 5: Multiple Missing Fields

### Request
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

{}
```

### Expected Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Name is required",
    "Email is required",
    "Password is required"
  ]
}
```

### What This Tests
✅ Multiple errors are collected and returned
✅ User gets comprehensive feedback about what's missing

---

## TEST CASE 6: Invalid Email Format

### Request
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "name": "Eve Wilson",
  "email": "not-a-valid-email",
  "password": "ValidPassword123"
}
```

### Expected Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Email format is invalid. Please use format: user@example.com"
  ]
}
```

### What This Tests
✅ Email format validation works
✅ Rejects emails without @ symbol
✅ Clear error message with expected format

---

## TEST CASE 7: Email Without Domain Extension

### Request
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "name": "Frank Miller",
  "email": "frank@example",
  "password": "ValidPassword123"
}
```

### Expected Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Email format is invalid. Please use format: user@example.com"
  ]
}
```

### What This Tests
✅ Email must have domain extension (.com, .org, etc.)
✅ Invalid format is caught and rejected

---

## TEST CASE 8: Password Too Short

### Request
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "name": "Grace Lee",
  "email": "grace@example.com",
  "password": "short"
}
```

### Expected Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Password must be at least 8 characters long"
  ]
}
```

### What This Tests
✅ Password length validation works
✅ Minimum 8 character requirement enforced
✅ Clear error message about requirement

---

## TEST CASE 9: Name with Numbers

### Request
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "name": "Henry123",
  "email": "henry@example.com",
  "password": "ValidPassword123"
}
```

### Expected Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Name can only contain letters and spaces"
  ]
}
```

### What This Tests
✅ Name validation rejects numbers
✅ Only letters and spaces allowed
✅ Prevents injection of invalid characters

---

## TEST CASE 10: Name with Special Characters

### Request
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "name": "Iris@#$",
  "email": "iris@example.com",
  "password": "ValidPassword123"
}
```

### Expected Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Name can only contain letters and spaces"
  ]
}
```

### What This Tests
✅ Special characters rejected in name
✅ Security against injection attacks

---

## TEST CASE 11: Name Too Short

### Request
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "name": "J",
  "email": "jack@example.com",
  "password": "ValidPassword123"
}
```

### Expected Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Name must be at least 2 characters long"
  ]
}
```

### What This Tests
✅ Name minimum length enforced
✅ Prevents single character names

---

## TEST CASE 12: Multiple Validation Errors

### Request
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "name": "K1",
  "email": "invalid-email",
  "password": "short"
}
```

### Expected Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Name can only contain letters and spaces",
    "Email format is invalid. Please use format: user@example.com",
    "Password must be at least 8 characters long"
  ]
}
```

### What This Tests
✅ All validation errors collected together
✅ User sees all issues at once
✅ Comprehensive feedback for correction

---

## TEST CASE 13: Duplicate Email Registration

### Request (after first user registered)
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "name": "Laura Green",
  "email": "alice.johnson@example.com",
  "password": "DifferentPassword123"
}
```

### Expected Response (409 Conflict)
```json
{
  "success": false,
  "message": "User with this email already exists"
}
```

### What This Tests
✅ Duplicate email prevention works
✅ Business logic prevents duplicate users
✅ Appropriate 409 status code

---

## TEST CASE 14: Get All Users

### Request
```
GET http://localhost:3000/api/users
```

### Expected Response (200 OK)
```json
{
  "success": true,
  "message": "Found X user(s)",
  "count": X,
  "users": [
    {
      "id": 1,
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "createdAt": "2024-05-14T10:30:00.000Z"
    }
  ]
}
```

### What This Tests
✅ Can retrieve all registered users
✅ User count is accurate
✅ Only safe user data returned (no passwords)

---

## TEST CASE 15: Get Specific User

### Request
```
GET http://localhost:3000/api/users/1
```

### Expected Response (200 OK)
```json
{
  "success": true,
  "message": "User found",
  "user": {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "createdAt": "2024-05-14T10:30:00.000Z"
  }
}
```

### What This Tests
✅ Can retrieve specific user by ID
✅ Correct user data returned

---

## TEST CASE 16: Get Non-Existent User

### Request
```
GET http://localhost:3000/api/users/999
```

### Expected Response (404 Not Found)
```json
{
  "success": false,
  "message": "User not found"
}
```

### What This Tests
✅ Proper error handling for missing user
✅ Correct 404 status code

---

## TEST CASE 17: Delete User

### Request
```
DELETE http://localhost:3000/api/users/1
```

### Expected Response (200 OK)
```json
{
  "success": true,
  "message": "User deleted successfully",
  "user": {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com"
  }
}
```

### What This Tests
✅ User deletion works
✅ Deleted user data returned in response
✅ Successful operation confirmed

---

## TEST CASE 18: Delete Non-Existent User

### Request
```
DELETE http://localhost:3000/api/users/999
```

### Expected Response (404 Not Found)
```json
{
  "success": false,
  "message": "User not found"
}
```

### What This Tests
✅ Proper error handling for deletion
✅ Cannot delete non-existent user

---

## TEST CASE 19: Invalid Endpoint

### Request
```
GET http://localhost:3000/invalid-route
```

### Expected Response (404 Not Found)
```json
{
  "success": false,
  "message": "Endpoint not found",
  "path": "/invalid-route",
  "method": "GET"
}
```

### What This Tests
✅ 404 handler catches invalid routes
✅ Helpful error message with path and method

---

## TEST CASE 20: Empty Request Body

### Request
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

```

### Expected Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Name is required",
    "Email is required",
    "Password is required"
  ]
}
```

### What This Tests
✅ Empty body handled correctly
✅ All fields reported as missing

---

## Summary of Test Results

| Test Case | Validates | Status | Result |
|-----------|-----------|--------|--------|
| 1 | Valid input accepted | ✅ | 201 Created |
| 2 | Missing name rejected | ✅ | 400 Bad Request |
| 3 | Missing email rejected | ✅ | 400 Bad Request |
| 4 | Missing password rejected | ✅ | 400 Bad Request |
| 5 | Multiple errors collected | ✅ | 400 Bad Request |
| 6 | Invalid email format | ✅ | 400 Bad Request |
| 7 | Email missing extension | ✅ | 400 Bad Request |
| 8 | Short password rejected | ✅ | 400 Bad Request |
| 9 | Numbers in name rejected | ✅ | 400 Bad Request |
| 10 | Special chars in name rejected | ✅ | 400 Bad Request |
| 11 | Name too short rejected | ✅ | 400 Bad Request |
| 12 | Multiple errors displayed | ✅ | 400 Bad Request |
| 13 | Duplicate email prevention | ✅ | 409 Conflict |
| 14 | Retrieve all users | ✅ | 200 OK |
| 15 | Retrieve specific user | ✅ | 200 OK |
| 16 | Get non-existent user | ✅ | 404 Not Found |
| 17 | Delete user | ✅ | 200 OK |
| 18 | Delete non-existent user | ✅ | 404 Not Found |
| 19 | Invalid endpoint | ✅ | 404 Not Found |
| 20 | Empty body handling | ✅ | 400 Bad Request |

---

**All test cases validate the input validation workflow and confirm invalid data cannot reach business logic.**