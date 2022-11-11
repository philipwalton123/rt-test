const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./RDSConnect')
require('dotenv').config();
const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ information: 'Node.js, Express, and Postgres API' })
})
  
app.get('/tickets', (req, res)=> {
  return db.query('SELECT * FROM tickets')
  .then(results => {
    res.status(200).send(results.rows)
  })
})

app.listen(port, () => {
    console.log(`App running on the port ${port}.`)
})

