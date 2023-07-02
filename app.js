const express = require('express')
require('dotenv').config()
const connectDB = require('./db/connect')
const taskRouter = require('./routes/tasks')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', taskRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI)
    console.log(`Connected successfully to DB`)
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}
start()
