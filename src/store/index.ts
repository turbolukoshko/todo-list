import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "./reducers/todo-reducer";

export const store = configureStore({
  reducer: todoReducer,
});

export type RootState = ReturnType<typeof todoReducer>;
