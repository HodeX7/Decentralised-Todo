import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};
//[ { title,listId, todos[]}]

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      const { id, item } = action.payload;
      const newArray = state.todoList.map((list) => {
        if (list.id === id) {
          list.todos.push(item);
          return list;
        }
        return list;
      });

      state.todoList = newArray;
    },
    removeTodo(state, action) {
      const { listId, todoId } = action.payload;
      const newArray = state.todoList.map((ele) => {
        if (ele.id === listId) {
          const newList = ele.todos.filter((item) => item.id !== todoId);
          ele.todos = newList;
          return ele;
        }
        return ele;
      });
      console.log("new array", newArray);
      state.todoList = newArray;
    },
    changeTodo(state, action) {
      const { id, updatedList } = action.payload;
      console.log("updatedList", updatedList);
      const newArray = state.todoList.map((list) => {
        if (list.id === id) {
          list.todos = updatedList;
          return list;
        }
        return list;
      });

      state.todoList = newArray;
    },

    addList(state, action) {
      state.todoList.push(action.payload);
    },
    removeList(state, action) {
      const newList = state.todoList.filter(
        (list) => list.id !== action.payload
      );
      state.todoList = newList;
    },
  },
});

export const todoListStateSelector = (state) => state.todoSlice;
export const { addTodo, removeTodo, changeTodo, addList, removeList } =
  todoSlice.actions;
export default todoSlice.reducer;
