import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./modules/todoSlice";

export const reducersList = combineReducers({
  todo: todoReducer
});
