import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    display: (state, action) => {
      state.todos = action.payload
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    createTodo: (state, action) => {
      state.todos = action.payload
    },
  },
})

export const { display, deleteTodo, createTodo } = todosSlice.actions

export const getTodo = () => (dispatch) => {
  axios.get("/api/todos").then((r) => dispatch(display(r.data)))
}

export const addTodo = () => (dispatch) => {
  axios.post("/api/todos").then((r) => dispatch(createTodo(r.data)))
}

export const removeTodo = () => (dispatch) => {
  axios.delete("/api/todos").then((r) => dispatch(deleteTodo(r.data)))
}

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const selectTodo = (state) => state.todos.todos
export const selectNewTodo = (state) => state.todos.todos

export default todosSlice.reducer
