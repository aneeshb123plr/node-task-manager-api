const { CustomError } = require('../errors/custom-errors')

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(404).json({ err: err.message })
  }

  res.status(500).json({ err: err.message })
}

module.exports = errorHandlerMiddleware
