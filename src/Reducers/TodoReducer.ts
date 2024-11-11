import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo, TodoState } from "../Types/Todo";

const initialState: TodoState = { todos: [] };

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos?_limit=100");
  return response.data;
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

export const { toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
