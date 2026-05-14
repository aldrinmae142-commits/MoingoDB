// Validation Middleware
// This middleware validates user input before it reaches the controller

/**
 * Email validation regex pattern
 * Checks for basic email format: something@domain.extension
 */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates required fields in request body
 * @param {Array} fields - Array of field names that must be present
 * @returns {Function} Express middleware function
 */
const validateRequiredFields = (fields) => {
    return (req, res, next) => {
        const errors = [];

        fields.forEach(field => {
            if (!req.body[field] || req.body[field].trim() === '') {
                errors.push(`${field} is required`);
            }
        });

        if (errors.length > 0) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: errors
            });
        }

        next();
    };
};

/**
 * Validates email format
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const validateEmail = (req, res, next) => {
    const email = req.body.email;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: ["Email format is invalid. Please use format: user@example.com"]
        });
    }

    next();
};

/**
 * Validates password length
 * @param {number} minLength - Minimum password length required
 * @returns {Function} Express middleware function
 */
const validatePasswordLength = (minLength = 8) => {
    return (req, res, next) => {
        const password = req.body.password;

        if (password.length < minLength) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: [`Password must be at least ${minLength} characters long`]
            });
        }

        next();
    };
};

/**
 * Validates name format (alphabetic characters and spaces only)
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const validateName = (req, res, next) => {
    const name = req.body.name;
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!nameRegex.test(name)) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: ["Name can only contain letters and spaces"]
        });
    }

    if (name.length < 2) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: ["Name must be at least 2 characters long"]
        });
    }

    next();
};

/**
 * Combined registration validation middleware
 * Validates all fields required for user registration
 */
const validateRegistration = (req, res, next) => {
    const { name, email, password } = req.body;
    const errors = [];

    // Check required fields
    if (!name || name.trim() === '') {
        errors.push("Name is required");
    }
    if (!email || email.trim() === '') {
        errors.push("Email is required");
    }
    if (!password || password.trim() === '') {
        errors.push("Password is required");
    }

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: errors
        });
    }

    // Validate name format
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
        errors.push("Name can only contain letters and spaces");
    }
    if (name.length < 2) {
        errors.push("Name must be at least 2 characters long");
    }

    // Validate email format
    if (!emailRegex.test(email)) {
        errors.push("Email format is invalid. Please use format: user@example.com");
    }

    // Validate password length
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long");
    }

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: errors
        });
    }

    next();
};

module.exports = {
    validateRequiredFields,
    validateEmail,
    validatePasswordLength,
    validateName,
    validateRegistration
};