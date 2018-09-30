const { fileNames } = require('./logger')
const winston = require('winston')
const express = require('express')

const port = 5000

const logger = winston.createLogger({
  level: "info",
  transports: [new winston.transports.Console()],
  format: winston.format.combine(winston.format.colorize(), winston.format.simple())
})

const app = express()

app.get('/', (req, res) => res.send(`Server started at ${new Date().toLocaleDateString()}`))
app.get('/names', (req, res) => res.json(fileNames))
app.get('*', (req, res) => res.send('You are looking for the dead among the living.'))

app.listen(port, () => logger.info(`App Started on Port ${port}`))