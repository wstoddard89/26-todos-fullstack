const express = require('express');
const app = express()

const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: '',
    database: 'todo_app',
  },
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const todos = []

app.get('/api/todos', async (req, res) => {
  const todos = await knex.raw('SELECT * FROM todos')
  const todo_rows = todos.rows
  res.json(todo_rows)
})

app.post('/api/todos', (req, res) => {
  const { description } = req.body
  let status = "active"
  knex.raw(`INSERT INTO todos (description, status, user_id) VALUES (?, ?, ?)`, [description, status, 1]).then((result => {
      res.json(result.rows)
    }))
})

app.delete('/api/todos',  (req, res) => {
  knex.raw(`DELETE FROM todos WHERE id = ?`, [req.body.id]).then((result => {
  res.json(result.rows)
  }))
})

app.patch('/api/todos', (req, res) => {
  // let status ="active"
  knex.raw(`UPDATE todos SET description = ?, status = ? WHERE id = ?`, [req.body.description, req.body.status, req.body.id]).then((result => {
  res.json(result.rows)
  }))
})


// -- EXAMPLE --
// const todos = []
// app.get('/api/todos', (req, res) => {
//   res.json(todos)
// })

// app.post('/api/todos', (req, res) => {
//   todos.push(req.body)
//   res.json({ message: 'added the todo!' })
// })



app.listen(3001, (req, res) => {
  console.log('listening on port 3001')
})