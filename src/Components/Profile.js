import React from "react";

import userProfile from "../Assets/user.jpg";
const Profile = ({ currentUserData }) => {
  const currentUserName = (
    <p>{currentUserData.userName ? currentUserData.userName : `@username`}</p>
  );

  const currentUserProfileImage = (
    <img
      src={
        currentUserData.profileImg ? currentUserData.profileImg : userProfile
      }
      alt="user profile"
    />
  );

  const currentUserDisplayName = (
    <h3>{currentUserData.name ? currentUserData.name : `User Name`}</h3>
  );

  return (
    <div className="profile">
      <div className="profile__img">{currentUserProfileImage}</div>
      {currentUserDisplayName}
      {currentUserName}
    </div>
  );
};

export default Profile;
