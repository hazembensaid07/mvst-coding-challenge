import React from "react";
import { useFetchGitHubData } from "../../hooks/useFetchGitHubInfoHook";
import RepositoryCard from "../../components/RepositoryCard/RepositoryCard";
import Input from "../../components/Input/Input";
interface RepositoryListProps {
  username: string;
}
interface Repository {
  id: string;
  name: string;
  url: string;
  updatedAt: string;
  descriptionHTML: string;
  primaryLanguage: {
    name: string;
  } | null;
  owner: {
    login: string;
    url: string;
  };
  stargazers: {
    totalCount: number;
  };
  forks: {
    totalCount: number;
  };
  visibility: string;
}
/**
 * RepositoryList is a functional component that displays a list of repositories for a given user.
 * It uses the `useFetchGitHubData` hook to fetch repository data for the specified username depending on searchValue  and
 * allows for searching through the repositories using a text input.
 * The component renders:
 * - An Input component for filtering repositories.
 * - A list of RepositoryCard components, one for each repository, showing key information.
 * - Loading state or a message if no repositories are found.
 * @param {RepositoryListProps} props -The props passed to the component with type RepositoryListProps
 * @returns {React.ReactElement} The TSX for the list of repositories.
 */
const RepositoryList: React.FC<RepositoryListProps> = ({ username }) => {
  const { repositoryData, repoLoading, handleChange, searchValue } =
    useFetchGitHubData(username);

  return (
    <div className="repositoryList">
      <Input
        onChange={handleChange}
        value={searchValue}
        type="text"
        placeholder="Find a repository..."
      />
      {repoLoading ? (
        <h1>Loading repositories...</h1>
      ) : (
        <>
          {repositoryData && repositoryData.length > 0 ? (
            repositoryData.map((repo: Repository) => (
              <RepositoryCard
                key={repo.id}
                title={repo.name}
                visibility={repo.visibility}
                stars={repo.stargazers.totalCount}
                forks={repo.forks.totalCount}
                technology={
                  repo.primaryLanguage ? repo.primaryLanguage.name : "N/A"
                }
                lastUpdate={`Updated On ${repo.updatedAt.split("T")[0]}`}
              />
            ))
          ) : (
            <h1>No repositories found.</h1>
          )}
        </>
      )}
    </div>
  );
};

export default RepositoryList;
