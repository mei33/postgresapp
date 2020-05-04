const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const db = require('./db')
db.sequelize.sync({ force: true })
  .then(() => {
  console.log("Drop and re-sync db.")
  })
  .catch(error => {
    console.log(error)
  })

const movieRouter = require('./routes/movie')

const app = express()

const apiPort = process.env.API_PORT

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.send('Инструкции лежат в README репозитория')
})

app.use('/api', movieRouter)

app.listen(apiPort)
