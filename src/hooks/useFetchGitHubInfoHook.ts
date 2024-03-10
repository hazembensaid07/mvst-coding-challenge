import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

/**
 * GraphQL query to fetch a user's GitHub profile data based on their username.
 */
const USER_QUERY = gql`
  query GetUser($login: String!) {
    user(login: $login) {
      avatarUrl
      bio
      login
      followers {
        totalCount
      }
      following {
        totalCount
      }
    }
  }
`;

/**
 * GraphQL query template to search for repositories based on a username and additional search criteria.
 */
const SEARCH_REPOS_QUERY = (userName: string, searchValue: string) => gql`
  {
    search(query: "user:${userName} ${searchValue} in:name", type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          id
          name
          url
          visibility
          updatedAt
          descriptionHTML
          primaryLanguage {
            name
          }
          owner {
            login
            url
          }
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
        }
      }
    }
  }
`;

/**
 * A custom React hook for fetching GitHub user profile data and repositories.
 * It manages local state for search input and executes GraphQL queries to fetch data.
 *
 * @param {string} username - The GitHub username to fetch data for.
 * @returns An object containing:
 * - `profileData`: The fetched user profile data.
 * - `repositoryData`: An array of repositories related to the user.
 * - `handleChange`: Function to update search input value.
 * - `userLoading`: Boolean indicating if the user data is currently being fetched.
 * - `repoLoading`: Boolean indicating if the repository data is currently being fetched.
 * - `error`: Error object if any error occurred during data fetching.
 * - `searchValue`: The current value of the search input.
 */
export const useFetchGitHubData = (username: string) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useQuery(USER_QUERY, {
    variables: { login: username },
    skip: !username,
  });

  const {
    data: repoData,
    loading: repoLoading,
    error: repoError,
  } = useQuery(SEARCH_REPOS_QUERY(username, searchValue), {
    skip: !username,
  });

  /**
   * Event handler for updating the search input's value.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input event triggering the update.
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return {
    profileData: userData ? userData.user : null,
    repositoryData: repoData ? repoData.search.nodes : [],
    handleChange,
    userLoading,
    repoLoading,
    error: userError || repoError,
    searchValue,
  };
};
