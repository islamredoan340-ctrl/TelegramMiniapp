const express = require('express');
const User = require('../models/User');
const Transaction = require('../models/Transaction');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { userId, amount, address, paymentMethod } = req.body;
    
    // Validate input
    if (!userId || !amount || !address || !paymentMethod) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (amount < 100) {
      return res.status(400).json({ error: 'Minimum withdrawal is 100 BANANAS31' });
    }

    // Check user balance (in real app, you would fetch from database)
    const userBalance = 343; // Mock balance

    if (amount > userBalance) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    // Create transaction record
    const transaction = await Transaction.create(
      userId, 
      'withdrawal', 
      amount, 
      'pending'
    );

    // In real app, you would:
    // 1. Deduct balance from user
    // 2. Process payment through gateway
    // 3. Update transaction status

    res.json({
      success: true,
      message: 'Withdrawal request submitted successfully',
      transactionId: transaction.id
    });

  } catch (error) {
    console.error('Withdrawal error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;