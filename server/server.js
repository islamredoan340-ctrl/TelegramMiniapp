const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.post('/api/auth', (req, res) => {
  res.json({ success: true, user: req.body, balance: 343 });
});

app.get('/api/tasks', (req, res) => {
  res.json({ 
    tasks: [
      { channel: '@EARNING25M', reward: 1.00 },
      { channel: '@oimbd', reward: 1.00 },
      { channel: '@Bot_income_snt', reward: 1.00 }
    ]
  });
});

// Public folder serve করতে
app.use(express.static('public'));

// React app serve করতে
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});