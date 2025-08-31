const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Transaction = require('../models/Transaction')

// Request withdrawal
router.post('/request', async (req, res) => {
  try {
    const { userId, amount, address, paymentMethod } = req.body
    
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    
    // Check minimum amount
    if (amount < 100) {
      return res.status(400).json({ message: 'Minimum withdrawal is 100 BANANAS31' })
    }
    
    // Check sufficient balance
    if (user.balance < amount) {
      return res.status(400).json({ message: 'Insufficient balance' })
    }
    
    // Create transaction
    const transaction = new Transaction({
      userId,
      amount,
      address,
      paymentMethod,
      status: 'pending'
    })
    
    // Update user balance
    user.balance -= amount
    user.pendingWithdrawals += amount
    
    await Promise.all([transaction.save(), user.save()])
    
    res.json({ 
      message: 'Withdrawal request submitted', 
      newBalance: user.balance 
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Get withdrawal history
router.get('/history/:userId', async (req, res) => {
  try {
    const transactions = await Transaction.find({ 
      userId: req.params.userId 
    }).sort({ date: -1 })
    
    res.json(transactions)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router