const express = require('express');
const router = express.Router();

// Mock database for demonstration
const users = [];

// Registration endpoint
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }
    // TODO: Add logic to save user to database
    users.push({ username, password }); // Mock registration
    return res.status(201).json({ message: 'User registered successfully.' });
});

// Login endpoint
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password.' });
    }
    // TODO: Add logic for authentication (e.g., generating a token)
    return res.status(200).json({ message: 'Login successful.' });
});

module.exports = router;