// repositorycard.stories.ts

import { Meta, StoryObj } from "@storybook/react";
import ProfileInfo from "../components/ProfileInfoCard/ProfileInfo";
import avatar from "../assets/avatar.jpg";
const meta: Meta<typeof ProfileInfo> = {
  title: "Example/ProfileInfo",
  component: ProfileInfo,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const ProfileInfoExample: Story = {
  args: {
    ...meta.args,
    picture: avatar,
    bio: "software engineer",
    username: "hazembensaid07",
    following: 100,
    followers: 5,
  },
};
