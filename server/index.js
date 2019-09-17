const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
}))

app.get('/user/:userId', (req, res, next) => {
  res.send(req.params)
})

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.listen(
  port,
  () => console.log(`Listening on http://localhost:${port}`)
)
