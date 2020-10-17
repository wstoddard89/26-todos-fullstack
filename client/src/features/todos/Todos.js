import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {getTodo,
        display,
        selectTodo,} from "../todos/todosSlice.js"

export default function Todos() {

  const dispatch = useDispatch()
  const todo = useSelector(selectTodo)

  useEffect(() => {
    dispatch(getTodo(todo))
    console.log(todo)
  }, [])


  return (
  <div className="test">{todo.description}
  {console.log(todo)}</div>
  )


}