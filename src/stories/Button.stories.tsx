import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button/Button";
import { faStar } from "@fortawesome/free-regular-svg-icons";
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const StarButton: Story = {
  args: {
    text: "Star",
    disabled: false,
    icon: faStar,
    className: "github-star-button",
    onClick: (): void => console.log("Starred"),
  },
};

export const SearchButton: Story = {
  args: {
    text: "Search GitHub User",
    disabled: false,
    className: "search-user-button",
  },
};
