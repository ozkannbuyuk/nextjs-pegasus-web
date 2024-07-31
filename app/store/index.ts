import { configureStore } from "@reduxjs/toolkit";

import hotels from "./hotels";
import filter from "./filter";

export const store = configureStore({
  reducer: {
    hotels,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
