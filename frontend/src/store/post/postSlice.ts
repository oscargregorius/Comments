import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostType } from "./types";

export interface PostState {
  posts: [] | PostType[];
  loading: boolean;
  error: string;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: "",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },

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
        state.posts.length > 0 ? [...state.posts, payload] : [payload];
    },
  },
});

export const { setLoading, setError, setPosts, updatePost, updatePosts } =
  postSlice.actions;

export const postsSelector = (state: { postReducer: PostState }) =>
  state.postReducer;

export default postSlice.reducer;
