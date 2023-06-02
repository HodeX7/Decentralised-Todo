import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import listSlice from "./listSlice";

const store = configureStore({
  reducer: {
    todoSlice: todoSlice,
    // listSlice: listSlice,
  },
});

export default store;
