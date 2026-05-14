// Input Validation Lab - Express Server
// Main application file with Express setup and middleware configuration

const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

// ============================================================
// MIDDLEWARE
// ============================================================

// Parse incoming JSON request bodies
app.use(express.json());

// Request logging middleware (optional - for debugging)
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

// ============================================================
// ROUTES
// ============================================================

// Health check endpoint
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Input Validation Lab - API Server is running",
        endpoints: {
            health: "GET /",
            register: "POST /api/users/register",
            getAllUsers: "GET /api/users",
            getUserById: "GET /api/users/:id",
            deleteUser: "DELETE /api/users/:id"
        }
    });
});

// User API routes
app.use('/api/users', userRoutes);

// ============================================================
// ERROR HANDLING
// ============================================================

// 404 Not Found middleware
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Endpoint not found",
        path: req.path,
        method: req.method
    });
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        success: false,
        message: "Internal server error",
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// ============================================================
// START SERVER
// ============================================================

app.listen(port, () => {
    console.log(`
    ========================================
    Input Validation Lab - Server Started
    ========================================
    Server running on: http://localhost:${port}
    Environment: ${process.env.NODE_ENV || 'development'}
    ========================================
    
    Available endpoints:
    - GET  http://localhost:${port}/ (Health check)
    - POST http://localhost:${port}/api/users/register (Register new user)
    - GET  http://localhost:${port}/api/users (Get all users)
    - GET  http://localhost:${port}/api/users/:id (Get specific user)
    - DELETE http://localhost:${port}/api/users/:id (Delete user)
    
    ========================================
    `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    process.exit(0);
});

module.exports = app;