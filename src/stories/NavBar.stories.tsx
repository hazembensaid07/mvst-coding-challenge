// NavBar.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import Navbar from "../components/NavBar/NavBar";

const meta: Meta<typeof Navbar> = {
  title: "Example/Navbar",
  component: Navbar,
};
export default meta;
type Story = StoryObj<typeof meta>;
export const NavbarStory: Story = {};
