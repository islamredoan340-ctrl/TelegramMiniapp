const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  reward: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ['daily', 'hourly', 'telegram'],
    required: true
  },
  link: {
    type: String,
    required: true
  },
  dailyLimit: {
    type: Number,
    default: 1
  },
  hourlyLimit: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('Task', taskSchema)