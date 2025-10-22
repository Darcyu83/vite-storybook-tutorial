import { configureStore } from "@reduxjs/toolkit";
import { TasksSlice } from "./taskSlice";

const store = configureStore({
  reducer: {
    taskbox: TasksSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
