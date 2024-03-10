import { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

// GraphQL query to check if a username is available.
const CHECK_USERNAME = gql`
  query CheckUsername($username: String!) {
    user(login: $username) {
      id
    }
  }
`;

/**
 * A custom React hook that provides functionality to check username availability.
 * It encapsulates local state management for the username input and integrates with
 * a GraphQL API to check for the availability of a username.
 *
 * @returns An object containing:
 * - `error`: Any error that occurred during the GraphQL query.
 * - `handleChange`: A function to update the username state.
 * - `handleSearch`: A function to trigger the username availability check.
 * - `username`: The current value of the username input.
 * - `data`: The data returned from the GraphQL query.
 */
export const useVerifyUsername = () => {
  const [username, setUsername] = useState<string>("");
  const [checkUsername, { data, error }] = useLazyQuery(CHECK_USERNAME, {
    fetchPolicy: "network-only",
  });

  /**
   * Event handler to update the username state based on user input.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  /**
   * Function to initiate a search for username availability. It triggers the
   * GraphQL query with the current username state as a variable.
   */
  const handleSearch = () => {
    if (username) {
      checkUsername({ variables: { username } });
    }
  };

  return {
    error,
    handleChange,
    handleSearch,
    username,
    data,
  };
};
