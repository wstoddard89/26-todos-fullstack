import { createSlice } from '@reduxjs/toolkit';
import axios from "axios"

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    todos: [],
  },
  reducers: {
    display: state => {
      state.todo = action.payload;
    },
  },
});

export const { display } = loginSlice.actions;

export const getTodo = () => (dispatch) => {
  axios.get("/api/todos").then((r) => dispatch(display(r.data)))
}


// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };


export const selectTodo = (state) => state.login.todos;

export default loginSlice.reducer;
