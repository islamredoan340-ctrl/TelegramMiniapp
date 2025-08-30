const express = require('express');
const Transaction = require('../models/Transaction');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { userId, amount, address, paymentMethod } = req.body;
    
    if (!userId || !amount || !address || !paymentMethod) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (amount < 100) {
      return res.status(400).json({ error: 'Minimum withdrawal is 100 BANANAS31' });
    }

    const transaction = await Transaction.create(
      userId, 
      'withdrawal', 
      amount, 
      'pending'
    );

    res.json({
      success: true,
      message: 'Withdrawal request submitted successfully',
      transactionId: transaction.id
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;