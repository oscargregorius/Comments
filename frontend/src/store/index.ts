import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import postReducer from "./post/postSlice";
import errorReducer from "./errorHandler/errorSlice";

const reducer = combineReducers({
  postReducer,
  errorReducer,
});
const store = configureStore({
  reducer,
});

export default store;
