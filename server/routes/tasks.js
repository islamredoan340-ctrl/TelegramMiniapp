const express = require('express');
const Task = require('../models/Task');
const User = require('../models/User');
const router = express.Router();

router.get('/telegram', async (req, res) => {
  try {
    const tasks = [
      { id: 1, channel: '@EARNING25M', reward: 1.00, action: 'Join' },
      { id: 2, channel: '@oimbd', reward: 1.00, action: 'Join' },
      { id: 3, channel: '@Bot_income_snt', reward: 1.00, action: 'Join' }
    ];

    res.json({ success: true, tasks });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/complete', async (req, res) => {
  try {
    const { taskId, userId } = req.body;
    
    // Find task details (in real app, from database)
    const tasks = [
      { id: 1, reward: 1.00 },
      { id: 2, reward: 1.00 },
      { id: 3, reward: 1.00 }
    ];
    
    const task = tasks.find(t => t.id === taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Create task record and update user balance
    const taskRecord = await Task.create(userId, 'telegram', task.reward);
    await User.updateBalance(userId, task.reward);

    res.json({
      success: true,
      reward: task.reward,
      message: 'Task completed successfully'
    });

  } catch (error) {
    console.error('Task completion error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;