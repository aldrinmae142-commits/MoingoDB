// User Routes
// Defines all endpoints related to user operations

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateRegistration } = require('../middleware/validation');

/**
 * POST /api/users/register
 * Register a new user
 * Validates: name, email, password
 * 
 * Request body:
 * {
 *   "name": "John Doe",
 *   "email": "john@example.com",
 *   "password": "securePassword123"
 * }
 * 
 * Success Response (201):
 * {
 *   "success": true,
 *   "message": "User registered successfully",
 *   "user": {
 *     "id": 1,
 *     "name": "John Doe",
 *     "email": "john@example.com",
 *     "createdAt": "2024-05-14T10:30:00.000Z"
 *   }
 * }
 * 
 * Error Response (400):
 * {
 *   "success": false,
 *   "message": "Validation failed",
 *   "errors": ["Email format is invalid..."]
 * }
 */
router.post('/register', validateRegistration, userController.registerUser);

/**
 * GET /api/users
 * Retrieve all registered users
 * 
 * Success Response (200):
 * {
 *   "success": true,
 *   "message": "Found 2 user(s)",
 *   "count": 2,
 *   "users": [...]
 * }
 */
router.get('/', userController.getAllUsers);

/**
 * GET /api/users/:id
 * Retrieve specific user by ID
 * 
 * URL Params: id (integer)
 * 
 * Success Response (200):
 * {
 *   "success": true,
 *   "message": "User found",
 *   "user": {...}
 * }
 * 
 * Error Response (404):
 * {
 *   "success": false,
 *   "message": "User not found"
 * }
 */
router.get('/:id', userController.getUserById);

/**
 * DELETE /api/users/:id
 * Delete a user by ID
 * 
 * URL Params: id (integer)
 * 
 * Success Response (200):
 * {
 *   "success": true,
 *   "message": "User deleted successfully"
 * }
 * 
 * Error Response (404):
 * {
 *   "success": false,
 *   "message": "User not found"
 * }
 */
router.delete('/:id', userController.deleteUser);

module.exports = router;