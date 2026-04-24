const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Backend: Route handler that receives requests from frontend
app.post('/api/users', (req, res) => {
    // Step 1: Receive data from frontend
    const { name, email } = req.body;
    
    // Step 2: Server-side validation
    if (!name || !email) {
        return res.status(400).json({
            success: false,
            message: 'Name and email are required'
        });
    }
    
    // Step 3: Process business logic (in real app, would query database)
    // This simulates saving to MongoDB
    const userData = {
        id: Math.random().toString(36).substr(2, 9),
        name: name,
        email: email,
        createdAt: new Date()
    };
    
    // Step 4: Send response back to frontend
    res.json({
        success: true,
        message: 'User created successfully',
        data: userData
    });
});

// Get all users endpoint
app.get('/api/users', (req, res) => {
    // In a real application, this would query MongoDB
    const mockUsers = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ];
    res.json(mockUsers);
});

// Start server
app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
    console.log('Waiting for requests from frontend...');
});