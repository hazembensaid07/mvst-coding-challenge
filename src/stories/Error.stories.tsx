// NavBar.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const meta: Meta<typeof ErrorMessage> = {
  title: "Example/ErrorMessage",
  component: ErrorMessage,
};
export default meta;
type Story = StoryObj<typeof meta>;
export const ErrorMessageStory: Story = {
  args: {
    message: "error occured",
  },
};
