import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user-slice";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  }
}) 

export type RootState = ReturnType<typeof store.getState>;
export default store;



