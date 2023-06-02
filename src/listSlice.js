// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   lists: [{ id: 0, todos: [] }],
// };

// const listSlice = createSlice({
//   name: "listSlice",
//   initialState: initialState,
//   reducers: {
//     addList(state, action) {
//       state.lists.push(action.payload);
//     },
//     removeList(state, action) {
//       const newList = state.lists.filter((list) => list.id !== action.payload);
//       state.lists = newList;
//     },
//   },
// });

// export const listsStateSelector = (state) => state.listSlice;
// export const { addList, removeList } = listSlice.actions;
// export default listSlice.reducer;
