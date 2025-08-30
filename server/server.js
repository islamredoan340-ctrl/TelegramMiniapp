// server/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/withdraw', require('./routes/withdraw'));

// Rewards routes
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

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Check if build exists, otherwise serve basic HTML
const buildPath = path.join(__dirname, '../build');
if (fs.existsSync(buildPath)) {
    app.use(express.static(buildPath));
    console.log('Serving React build files');
} else {
    console.log('Build folder not found - serving basic HTML');
}

// Handle all routes
app.get('*', (req, res) => {
    if (fs.existsSync(buildPath)) {
        res.sendFile(path.join(buildPath, 'index.html'));
    } else {
        res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>InstaTasker</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                    h1 { color: #667eea; }
                </style>
            </head>
            <body>
                <h1>InstaTasker App</h1>
                <p>Server is running successfully! 🚀</p>
                <p>React build is in progress...</p>
                <p><a href="/api/health">Check API Health</a></p>
            </body>
            </html>
        `);
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});