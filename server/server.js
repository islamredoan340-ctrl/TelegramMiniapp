// server/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/withdraw', require('./routes/withdraw'));

// ✅ Rewards routes directly in server.js (if file not found)
app.post('/api/rewards/check-in', (req, res) => {
    res.json({
        success: true,
        reward: 5,
        streak: 6,
        message: 'Daily check-in successful'
    });
});

app.get('/api/rewards/info', (req, res) => {
    res.json({
        success: true,
        dailyReward: 5,
        referralReward: 20,
        minWithdrawal: 100
    });
});

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../build')));

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Handle React routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});