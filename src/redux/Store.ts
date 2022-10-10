import { configureStore } from "@reduxjs/toolkit";
import catFactReducer from "./CatFactSlice";

const store = configureStore({
  reducer: {
    catFact: catFactReducer
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;