// server.js - final version
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Check if build exists
const buildPath = path.join(__dirname, '../build');
if (fs.existsSync(buildPath)) {
  app.use(express.static(buildPath));
  console.log('Serving build files');
} else {
  console.log('Build folder not found - serving basic page');
}

// API Routes - এগুলো যোগ করুন
app.use('/api/tasks', (req, res) => {
  // Mock tasks data
  const tasks = [
    { id: 1, channel: '@EARNING25M', reward: 1.00 },
    { id: 2, channel: '@oimbd', reward: 1.00 },
    { id: 3, channel: '@Bot_income_snt', reward: 1.00 }
  ];
  res.json({ success: true, tasks });
});

app.use('/api/auth', (req, res) => {
  // Mock authentication
  res.json({ success: true, user: req.body, balance: 343 });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Serve React app
app.get('*', (req, res) => {
  if (fs.existsSync(buildPath)) {
    res.sendFile(path.join(buildPath, 'index.html'));
  } else {
    res.send(`
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
          <p>App is building, please refresh in a moment...</p>
          <p>If this persists, check your build process.</p>
        </body>
      </html>
    `);
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});