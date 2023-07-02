class CustomError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

const customErrorHandler = (msg, statusCode) => {
  return new CustomError(msg, statusCode)
}

module.exports = {
  CustomError,
  customErrorHandler,
}
