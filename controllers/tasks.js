const TaskModel = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const { customErrorHandler } = require('../errors/custom-errors')

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await TaskModel.find({})
  res.status(200).json(tasks)
})

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await TaskModel.findOne({ _id: taskID })
  if (!task) {
    return next(customErrorHandler(`Task not found with ID ${taskID}`, 404))
  }
  res.status(200).send(task)
})

const createTask = asyncWrapper(async (req, res) => {
  const task = await TaskModel.create(req.body)
  res.status(201).json(task)
})

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await TaskModel.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })
  if (!task) {
    return next(customErrorHandler(`Task not found with ID ${taskID}`, 404))
  }
  return res.status(200).json(task)
})

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await TaskModel.findOneAndDelete({ _id: taskID })
  if (!task) {
    return next(customErrorHandler(`Task not found with ID ${taskID}`, 404))
  }
  return res.status(200).json(task)
})

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
}
