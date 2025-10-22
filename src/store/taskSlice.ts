import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TaskData } from "../types";

interface TaskBoxState {
  tasks: TaskData[];
  status: "idle" | "loading" | "failed" | "succeeded";
  error: string | null;
}

const defaultTasks: TaskData[] = [
  { id: "1", title: "Something", state: "TASK_INBOX" },
  { id: "2", title: "Something more", state: "TASK_INBOX" },
  { id: "3", title: "Something else", state: "TASK_INBOX" },
  { id: "4", title: "Something again", state: "TASK_INBOX" },
];

const TaskBoxData: TaskBoxState = {
  tasks: defaultTasks,
  status: "idle",
  error: null,
};
export const TasksSlice = createSlice({
  name: "taskbox",
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (
      state,
      action: PayloadAction<{ id: string; newTaskState: TaskData["state"] }>
    ) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.state = action.payload.newTaskState;
      }
    },
  },
});

export const { updateTaskState } = TasksSlice.actions;
