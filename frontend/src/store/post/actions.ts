import { AppThunk } from "../../index";
import { setPosts, updatePost, updatePosts } from "./postSlice";
import { PostToAddType, CommentToAddType } from "./types";
import { setIsOpen, setErrorMsg } from "../errorHandler/errorSlice";
import axios from "axios";

export const getPosts = (): AppThunk => {
  return async (dispatch) => {
    try {
      const baseURL: string = "/rest/posts";
      const res = await axios.get(baseURL);
      res.status === 200 && dispatch(setPosts(res.data));
      if (res.status !== 200) {
        dispatch(setErrorMsg("Something went wrong"));
        dispatch(setIsOpen(true));
      }
    } catch (error) {
      dispatch(setErrorMsg("Something went wrong"));
      dispatch(setIsOpen(true));
    }
  };
};

export const createPost = (data: PostToAddType): AppThunk => {
  return async (dispatch) => {
    try {
      const baseURL: string = "/rest/post";
      const post = await axios.post(baseURL, data);
      post.status === 200 && dispatch(updatePosts(post.data));
      if (post.status !== 200) {
        dispatch(setErrorMsg("Something went wrong"));
        dispatch(setIsOpen(true));
      }
    } catch (error) {
      dispatch(setErrorMsg("Something went wrong"));
      dispatch(setIsOpen(true));
    }
  };
};

export const createComment = (data: CommentToAddType): AppThunk => {
  return async (dispatch) => {
    try {
      const baseURL: string = "/rest/comment";
      const updatedPost = await axios.post(baseURL, data);
      updatedPost.status === 200 && dispatch(updatePost(updatedPost.data));
      if (updatedPost.status !== 200) {
        dispatch(setErrorMsg("Something went wrong"));
        dispatch(setIsOpen(true));
      }
    } catch (error) {
      dispatch(setErrorMsg("Something went wrong"));
      dispatch(setIsOpen(true));
    }
  };
};
