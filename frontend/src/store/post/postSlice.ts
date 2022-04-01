import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostType } from "./types";

export interface PostState {
  posts: [] | PostType[];
}

const initialState: PostState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, { payload }: PayloadAction<PostType[]>) => {
      state.posts = payload;
    },

    updatePost: (state, { payload }: PayloadAction<PostType>) => {
      state.posts = state.posts.map((p) => {
        if (p.id === payload.id) {
          p = payload;
        }
        return p;
      });
    },

    updatePosts: (state, { payload }: PayloadAction<PostType>) => {
      state.posts =
        state.posts.length > 0 ? [payload, ...state.posts] : [payload];
    },
  },
});

export const { setPosts, updatePost, updatePosts } =
  postSlice.actions;

export const postsSelector = (state: { postReducer: PostState }) =>
  state.postReducer;

export default postSlice.reducer;
