import React from "react";
import "./ProfileInfo.css";
import { ProfileInfoSchema } from "../../Schemas/ProfileInfoSchema";
/**
 * ProfileInfo is a React functional component that displays user information.
 * It renders the user's profile picture, username, biography, and stats about followers and following.
 *
 * @param {ProfileInfoSchema} props - The props passed to the component to the component with type ProfileInfoSchema and attributes destructured .
 * @returns {React.ReactElement} TSX for rendering the profile information section.
 */
const ProfileInfo: React.FC<ProfileInfoSchema> = ({
  picture,
  bio,
  username,
  following,
  followers,
}) => {
  return (
    <div className="container-profile">
      <img
        className="profile-photo"
        src={picture}
        alt={`Profile of ${username}`}
      />
      <h1>{username}</h1>
      <p className="bio">{bio}</p>
      <div className="profile-stats">
        <div className="stat">
          <span className="icon-follow">👥</span>
          <p>{followers} followers</p>
        </div>
        <div className="stat">
          <span className="icon-follow">👤</span>
          <p>{following} following</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
