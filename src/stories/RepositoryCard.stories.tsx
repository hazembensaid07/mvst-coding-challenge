// repositorycard.stories.ts

import { Meta, StoryObj } from "@storybook/react";
import RepositoryCard from "../components/RepositoryCard/RepositoryCard";

const meta: Meta<typeof RepositoryCard> = {
  title: "Example/RepositoryCard",
  component: RepositoryCard,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Repository: Story = {
  args: {
    ...meta.args,
    title: "react app",
    stars: 20,
    forks: 3,
    visibility: "public",
    technology: "Javascript",
    lastUpdate: "20-10-2023",
  },
};
