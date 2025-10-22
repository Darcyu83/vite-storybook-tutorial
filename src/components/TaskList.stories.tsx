import TaskList from "./TaskList";
import * as TaskStories from "./Task.stories";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Provider } from "react-redux";
import store from "../store/store";
const meta = {
  component: TaskList,
  title: "TaskList",
  tags: ["autodocs"],

  decorators: [
    (story) => (
      <Provider store={store}>
        <div style={{ padding: "3rem" }}>Decorator 추가할수 있음 {story()}</div>
      </Provider>
    ),
  ],
  args: {
    ...TaskStories.ActionsData,
  },
} satisfies Meta<typeof TaskList>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tasks: [
      { ...TaskStories.Default.args.task, id: "1", title: "Task 1" },
      { ...TaskStories.Default.args.task, id: "2", title: "Task 2" },
      { ...TaskStories.Default.args.task, id: "3", title: "Task 3" },
      { ...TaskStories.Default.args.task, id: "4", title: "Task 4" },
      { ...TaskStories.Default.args.task, id: "5", title: "Task 5" },
      { ...TaskStories.Default.args.task, id: "6", title: "Task 6" },
    ],
  },
};

export const WithPinnedTask: Story = {
  args: {
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
    ],
  },
};

export const Loading: Story = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
  },
};
