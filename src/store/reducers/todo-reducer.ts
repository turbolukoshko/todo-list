import { createSlice } from "@reduxjs/toolkit";

import data from "../../api/data.json";

export const initialState = {
  todos: [...data],
};

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      const index = state.todos.findIndex((el) => el.id === action.payload.id);
      state.todos[index].active = !state.todos[index].active;
    },
    editTitle: (state, action) => {
      const index = state.todos.findIndex((el) => el.id === action.payload.id);
      state.todos[index].title = action.payload.title;
    },
  },
});

export default todoReducer.reducer;

export const { changeStatus, editTitle } = todoReducer.actions;
