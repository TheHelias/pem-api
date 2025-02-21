import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import logger from 'morgan'
import cors from 'cors'

import query from './database/db-connection'
import routes from './routes/index'

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')))
app.use('/', routes)

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the PEM API. Enjoy your consumation'
}))

module.exports = app
