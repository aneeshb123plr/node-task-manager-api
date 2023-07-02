const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: [50, "Name shouldn't be more than 50 chars"],
    minLength: [3, 'Atleast 3 characters should be needed'],
    trim: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('tasks', TaskSchema)
