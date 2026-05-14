// User Controller
// Contains business logic for user-related operations

// Simulated user database (in-memory storage for demo purposes)
let users = [];

/**
 * Register a new user
 * This function is only called after validation middleware confirms valid input
 * @param {Request} req - Express request object with validated body
 * @param {Response} res - Express response object
 */
const registerUser = (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user with email already exists
        const userExists = users.find(user => user.email === email);
        if (userExists) {
            return res.status(409).json({
                success: false,
                message: "User with this email already exists"
            });
        }

        // Create new user object
        const newUser = {
            id: users.length + 1,
            name: name.trim(),
            email: email.trim().toLowerCase(),
            password: password, // Note: In production, NEVER store plain passwords! Hash them.
            createdAt: new Date()
        };

        // Add user to database
        users.push(newUser);

        // Return success response (do NOT send password back)
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                createdAt: newUser.createdAt
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error during registration",
            error: error.message
        });
    }
};

/**
 * Get all users (for testing purposes)
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
const getAllUsers = (req, res) => {
    try {
        const usersList = users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt
        }));

        return res.status(200).json({
            success: true,
            message: `Found ${users.length} user(s)`,
            count: users.length,
            users: usersList
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error retrieving users",
            error: error.message
        });
    }
};

/**
 * Get user by ID
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
const getUserById = (req, res) => {
    try {
        const { id } = req.params;
        const user = users.find(u => u.id === parseInt(id));

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "User found",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                createdAt: user.createdAt
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error retrieving user",
            error: error.message
        });
    }
};

/**
 * Delete user by ID
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
const deleteUser = (req, res) => {
    try {
        const { id } = req.params;
        const userIndex = users.findIndex(u => u.id === parseInt(id));

        if (userIndex === -1) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const deletedUser = users.splice(userIndex, 1);

        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
            user: {
                id: deletedUser[0].id,
                name: deletedUser[0].name,
                email: deletedUser[0].email
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error deleting user",
            error: error.message
        });
    }
};

module.exports = {
    registerUser,
    getAllUsers,
    getUserById,
    deleteUser
};