import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./Reducers/DataReducer";
import TodoReducer from "./Reducers/TodoReducer";
export const store = configureStore({
  reducer: {
    data: DataReducer,
    todo: TodoReducer,
  },
});
