import { AppThunk } from "../../index";
import {
  setLoading,
  setError,
  setPosts,
  updatePost,
  updatePosts,
} from "./postSlice";
import { PostToAddType, CommentToAddType } from "./types";
import axios from "axios";

export const getPosts = (): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const baseURL: string = "http://localhost:4000/rest/posts";
      const res = await axios.get(baseURL);
      dispatch(setLoading(false));
      dispatch(setPosts(res.data));
      dispatch(setError(""));
    } catch (error) {
      dispatch(setError(error as string));
      dispatch(setLoading(false));
    }
  };
};

export const createPost = (data: PostToAddType): AppThunk => {
  return async (dispatch) => {
    try {
      const baseURL: string = "http://localhost:4000/rest/post";
      const post = await axios.post(baseURL, data);
      post.status === 200 && dispatch(updatePosts(post.data));
      dispatch(setError(""));
    } catch (error) {
      dispatch(setError(error as string));
    }
  };
};

export const createComment = (data: CommentToAddType): AppThunk => {
  return async (dispatch) => {
    try {
      const baseURL: string = "http://localhost:4000/rest/comment";
      const updatedPost = await axios.post(baseURL, data);
      console.log(updatedPost);
      updatedPost.status === 200 && dispatch(updatePost(updatedPost.data));
      dispatch(setError(""));
    } catch (error) {
      dispatch(setError(error as string));
    }
  };
};
