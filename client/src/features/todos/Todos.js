import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  getTodo,
  display,
  selectTodo,
  selectNewTodo,
  addTodo,
  deleteTodo,
  removeTodo,
} from "../todos/todosSlice.js"

export default function Todos() {
  const dispatch = useDispatch()
  const todo = useSelector(selectTodo)
  const newTodo = useSelector(selectNewTodo)

  useEffect(() => {
    dispatch(getTodo(todo))
    console.log(todo)
  }, [])

  function handleDelete(e) {
    e.preventDefault()
    dispatch(deleteTodo(todo))
  }

  return (
    <div className="container">
      <form className="todo-form">
        <input
          className="todo-input"
          placeholder="Enter your todo here"
        ></input>
        <button className="todo-input-btn" onClick={dispatch(addTodo(newTodo))}>
          Submit
        </button>
      </form>
      <div className="todo-labels-container">
        <div className="todo-description-label">Description</div>
        <div className="todo-status-label">Status</div>
      </div>
      {todo.map((item) => (
        <div className="todo-item-container">
          <div className="todo-description">{item.description}</div>
          <div className="todo-status-container">
            <div className="todo-status">{item.status}</div>
            <div className="todo-completed">Completed</div>
            <div className="todo-active">Active</div>
          </div>
          <button className="todo-delete-btn" onClick={handleDelete}>
            x
          </button>
        </div>
      ))}
    </div>
  )
}
