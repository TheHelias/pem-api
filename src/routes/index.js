import express from 'express'

const app = express.Router()

app.get('/', (req, res, next) => res.status(200).send({
  message: 'Welcome to the  PEM API!'
}))
app.get('/api', (req, res) =>
  res.status(200).send({
    message: 'Welcome to the  PEM API!'
  })
)

export default app
