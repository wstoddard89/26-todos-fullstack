import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  getTodo,
  selectTodo,
  addTodo,
  removeTodo,
  updateTodo,
} from "../todos/todosSlice.js"

export default function Todos() {
  const dispatch = useDispatch()
  const todo = useSelector(selectTodo)

  const [inputText, setInputText] = useState("")

  useEffect(() => {
    dispatch(getTodo(todo))
  }, [dispatch, todo])

  function handleDelete(item) {
    dispatch(removeTodo(item.id))
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addTodo(inputText))
    setInputText("")
  }

  function handleUpdate(id, status) {
    dispatch(updateTodo({ id, status }))
  }

  return (
    <div className="container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInputText(e.target.value)}
          className="todo-input"
          placeholder="Enter your todo here"
          value={inputText}
        ></input>
        <button type="submit" className="todo-input-btn">
          Submit
        </button>
      </form>
      <div className="todo-labels-container">
        <div className="todo-description-label">Description</div>
        <div className="todo-status-label">Status</div>
      </div>
      {todo.map((item) => (
        <div className="todo-item-container" key={item.id} id={item.id}>
          <div className="todo-description">{item.description}</div>
          <div className="todo-status-container">
            <div className="todo-status">{item.status}</div>

            {item.status === "active" ? (
              <button
                className="todo-completed-btn"
                type="submit"
                onClick={() => handleUpdate(item.id, "completed")}
              >
                Mark as Completed
              </button>
            ) : (
              <button
                className="todo-active-btn"
                type="submit"
                onClick={() => handleUpdate(item.id, "active")}
              >
                Set as Active
              </button>
            )}
          </div>
          <button
            className="todo-delete-btn"
            onClick={() => handleDelete(item)}
          >
            x
          </button>
        </div>
      ))}
    </div>
  )
}
