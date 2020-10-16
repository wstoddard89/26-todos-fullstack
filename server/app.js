const express = require('express');
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.json({hello: true})
})


app.listen(3001, (req, res) => {
  console.log('listening on port 3001')
})