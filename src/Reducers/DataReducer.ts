import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { PostI, PostState } from "../Types/Post";

const initialState: PostState = {
  posts: [],
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (_, thunkAPI) => {
  try {
    const response = await axios.get<PostI[]>(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostI>) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const { addPost, deletePost } = PostsSlice.actions;
export default PostsSlice.reducer;
