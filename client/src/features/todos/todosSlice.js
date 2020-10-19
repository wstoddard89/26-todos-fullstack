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
  },
})

export const { display, deleteTodo, createTodo } = todosSlice.actions

export const getTodo = () => (dispatch) => {
  axios.get("/api/todos").then((r) => dispatch(display(r.data)))
}

export const addTodo = (obj) => (dispatch) => {
  axios.post("/api/todos", { description: obj }).then((r) => {
    dispatch(getTodo())
  })
}

export const removeTodo = (id) => (dispatch) => {
  axios.delete("/api/todos/" + id).then((r) => {
    dispatch(getTodo())
  })
}

export const updateTodo = (obj) => (dispatch) => {
  axios.patch('/api/todos/' + obj.id, {status: obj.status}).then((r) => {
    dispatch(getTodo())
  })
}



// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const selectTodo = (state) => state.todos.todos

export default todosSlice.reducer
