import React, { useEffect } from "react";
import Input from "../Input/Input";
import { Button } from "../Button/Button";
import "./SearrchUserForm.css";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useVerifyUsername } from "../../hooks/useVerifyUsernameHook";

/**
 * SearchUserForm is a React functional component that provides a user interface
 * for searching GitHub usernames. It utilizes the `useUsernameAvailable` hook
 * to manage the search logic and navigation based on the search results.
 *
 * Upon finding a valid username, the component navigates to the user's profile page.
 * else the error message component will be displayed for 3s
 * @returns {React.ReactElement} The TSX code for rendering the search page,
 */
const SearchUserForm: React.FC = () => {
  //destructuring data and methods from the useUsernameAvailable hook
  const { handleSearch, error, handleChange, data, username } =
    useVerifyUsername();
  const navigate = useNavigate();

  // Effect hook to navigate to the user profile page if a valid user data is obtained.
  useEffect(() => {
    if (data?.user) {
      navigate(`/profile/${username}`);
    }
  }, [data]);

  return (
    <div className="card-search">
      <div className="card">
        <div className="card-image">
          <h2 className="card-heading">
            GitHub Profile Finder
            <small>Let's find the user</small>
          </h2>
        </div>
        <form
          className="card-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="input">
            <Input
              label="GitHub Username"
              type="text"
              value={username}
              placeholder="GitHub Username"
              onChange={handleChange}
            />
          </div>

          <div className="action">
            <Button
              text="Search"
              disabled={username != "" ? false : true}
              className="search-user-button"
            />
          </div>
          {error && (
            <ErrorMessage message="Oops! Please verify the GitHub username and try again." />
          )}
        </form>
      </div>
    </div>
  );
};

export default SearchUserForm;
