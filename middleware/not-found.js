const notFoundMiddleware = (req, res) => {
  res.status(404).send("Route doesn't found")
}

module.exports = notFoundMiddleware
