import React from "react";
import { useParams } from "react-router-dom";
import { useFetchGitHubData } from "../../hooks/useFetchGitHubInfoHook";
import ProfileInfo from "../../components/ProfileInfoCard/ProfileInfo";
import RepositoryList from "./RepositoryList";
import "./style.css";
import Navbar from "../../components/NavBar/NavBar";

/**
 * ProfilePage is a React functional component that represents the github profile page.
 * It utilizes the useParams hook to retrieve the current username from the URL and the useFetchGitHubData hook to fetch the GitHub profile data.
 * It conditionally renders the ProfileInfo and RepositoryList components based on the fetched data, displaying loading or error messages as necessary.
 *
 * @returns {React.ReactElement} The TSX for rendering the user profile page, including navbar, profile information, and repository list.
 */
const ProfilePage: React.FC = () => {
  // Extracting the username from the URL parameters.
  const { username } = useParams<{ username: string }>();
  const currentUsername = username ?? "";
  // Fetching the GitHub profile data using the custom hook.
  const { profileData, userLoading, error } =
    useFetchGitHubData(currentUsername);

  return (
    <div>
      <Navbar />
      <div className="profile-page">
        <div className="profile-children">
          {error ? (
            <h1>Error, TRY AGAIN</h1>
          ) : (
            <>
              {userLoading ? (
                <h1>Loading profile...</h1>
              ) : (
                <>
                  {profileData && (
                    <ProfileInfo
                      picture={profileData.avatarUrl}
                      bio={profileData.bio}
                      username={profileData.login}
                      following={profileData.following.totalCount}
                      followers={profileData.followers.totalCount}
                    />
                  )}
                  {profileData && <RepositoryList username={currentUsername} />}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
