import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    {
      id: 0,
      title: "",
      desc: "",
    },
  ],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      state.todoList.push(action.payload);
    },
    removeTodo(state, action) {
      const newList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      state.todoList = newList;
    },
    changeTodo(state, action) {
      state.todoList = action.payload;
    },
  },
});

export const todoListStateSelector = (state) => state.todoSlice;
export const { addTodo, removeTodo, changeTodo } = todoSlice.actions;
export default todoSlice.reducer;
