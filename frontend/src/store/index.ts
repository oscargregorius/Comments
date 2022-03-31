import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import postReducer from "./post/postSlice";

const reducer = combineReducers({
  postReducer,
});
const store = configureStore({
  reducer,
});

export default store;
