# Input Validation Lab - Node.js & Express

A comprehensive lab demonstrating input validation in a Node.js and Express.js application. This project implements proper validation middleware to ensure data integrity and application security.

## Learning Objectives

By completing this lab, you will understand:
- How to validate incoming request data
- Creating custom Express middleware for validation
- Handling and returning structured validation errors
- Preventing invalid data from reaching business logic
- Building secure and robust APIs

## Project Structure

```
input-validation-lab/
├── middleware/
│   └── validation.js       # Validation middleware functions
├── routes/
│   └── userRoutes.js       # User API route definitions
├── controllers/
│   └── userController.js   # Business logic for user operations
├── server.js               # Main Express application
├── package.json            # Dependencies and scripts
├── .gitignore              # Git ignore file
└── README.md               # This file
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Setup Steps

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd input-validation-lab
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the server**
```bash
npm start
```

The server will run on `http://localhost:3000`

## API Endpoints

### 1. Health Check
```
GET /
```
Returns server status and available endpoints.

**Response (200):**
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

### 2. Register User (WITH VALIDATION)
```
POST /api/users/register
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Validation Rules:**
- `name`: Required, 2+ characters, letters and spaces only
- `email`: Required, valid email format (user@domain.ext)
- `password`: Required, minimum 8 characters

**Success Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-05-14T10:30:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Email format is invalid. Please use format: user@example.com",
    "Password must be at least 8 characters long"
  ]
}
```

### 3. Get All Users
```
GET /api/users
```

**Response (200):**
```json
{
  "success": true,
  "message": "Found 2 user(s)",
  "count": 2,
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "createdAt": "2024-05-14T10:30:00.000Z"
    }
  ]
}
```

### 4. Get User by ID
```
GET /api/users/:id
```

**Response (200):**
```json
{
  "success": true,
  "message": "User found",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-05-14T10:30:00.000Z"
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "User not found"
}
```

### 5. Delete User
```
DELETE /api/users/:id
```

**Response (200):**
```json
{
  "success": true,
  "message": "User deleted successfully",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

## Testing with Postman

### Test Case 1: Valid Registration
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "name": "Alice Smith",
  "email": "alice@example.com",
  "password": "SecurePass123"
}
```
**Expected:** 201 Created with user data

### Test Case 2: Missing Required Fields
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "name": "Bob Jones"
}
```
**Expected:** 400 Bad Request
**Error:** "Email is required", "Password is required"

### Test Case 3: Invalid Email Format
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "name": "Carol White",
  "email": "invalid-email",
  "password": "ValidPass123"
}
```
**Expected:** 400 Bad Request
**Error:** "Email format is invalid. Please use format: user@example.com"

### Test Case 4: Short Password
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "name": "David Brown",
  "email": "david@example.com",
  "password": "short"
}
```
**Expected:** 400 Bad Request
**Error:** "Password must be at least 8 characters long"

### Test Case 5: Invalid Name (Numbers/Special Characters)
```
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "name": "Eve123",
  "email": "eve@example.com",
  "password": "ValidPass123"
}
```
**Expected:** 400 Bad Request
**Error:** "Name can only contain letters and spaces"

### Test Case 6: Get All Users
```
GET http://localhost:3000/api/users
```
**Expected:** 200 OK with list of users

### Test Case 7: Get Specific User
```
GET http://localhost:3000/api/users/1
```
**Expected:** 200 OK with user details

### Test Case 8: Delete User
```
DELETE http://localhost:3000/api/users/1
```
**Expected:** 200 OK with deleted user details

## Validation Logic Details

### Required Fields Validation
- Checks if fields exist in request body
- Validates that fields are not empty strings
- Returns error if any required field is missing

### Email Validation
- Uses regex pattern: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Ensures format: `something@domain.extension`
- Prevents common invalid formats

### Password Validation
- Minimum length: 8 characters
- Can be enhanced with additional rules (uppercase, special chars, etc.)

### Name Validation
- Only alphabetic characters and spaces allowed
- Minimum length: 2 characters
- Prevents injection of special characters

## Key Implementation Details

### Middleware Architecture
All validation happens in `/middleware/validation.js` before the request reaches the controller. This prevents invalid data from entering business logic.

### Error Response Format
All error responses follow a consistent JSON structure:
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": ["List of specific validation errors"]
}
```

### Controller Protection
The `registerUser` function only executes after validation middleware confirms valid input, ensuring data integrity.

### Separation of Concerns
- **Middleware**: Validation logic only
- **Controllers**: Business logic only
- **Routes**: Route definitions and middleware attachment
- **Server**: App setup and middleware registration

## Security Best Practices Implemented

1. **Input Validation**: All user inputs are validated before processing
2. **Error Handling**: Structured error responses without sensitive information
3. **Status Codes**: Appropriate HTTP status codes for different scenarios
4. **Data Sanitization**: Trimming whitespace from inputs
5. **Password Security Note**: Passwords are not returned in responses (in production, always hash passwords)

## Development

### Running in Development Mode
```bash
npm run dev
```
This uses `nodemon` for automatic server restart on file changes.

### Adding New Validation Rules

1. Create validation function in `/middleware/validation.js`
2. Export the function
3. Attach middleware to routes in `/routes/userRoutes.js`

Example:
```javascript
const validateUsername = (req, res, next) => {
    // validation logic
    next(); // or res.status(400).json(error)
};
```

## Troubleshooting

**Port already in use:**
```bash
# Use different port
PORT=3001 npm start
```

**Module not found:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Node version issues:**
```bash
# Check Node version
node --version
# Should be v14 or higher
```

## Learning Outcomes

Upon completing this lab, you will be able to:

- ✅ Create and implement validation middleware
- ✅ Validate multiple input fields with different rules
- ✅ Return structured error responses
- ✅ Prevent invalid data from reaching business logic
- ✅ Build secure Express.js APIs
- ✅ Handle edge cases and validation scenarios
- ✅ Write testable code with proper separation of concerns
- ✅ Implement best practices for error handling

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **Middleware Pattern**: For input validation
- **RESTful API**: Standard API design principles

## Author

Aldrin Magalang

## License

MIT License - feel free to use this project for learning purposes.

## Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [OWASP Input Validation Guide](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)

---

**Happy Learning!** 🚀