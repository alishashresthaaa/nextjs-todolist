import { configureStore } from "@reduxjs/toolkit";
import { reducersList } from "./reducers";

export const store = configureStore({
  reducer: reducersList,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
