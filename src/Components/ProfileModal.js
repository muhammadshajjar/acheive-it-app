import React, { useState } from "react";

import "./ProfileModal.css";
//components
import Button from "../UI/Button";
//assests

import { auth } from "../firebase-config";
import { updatePassword } from "firebase/auth";

import useLoader from "../Hooks/useLoader";
import Profile from "./Profile";

const ProfileModal = ({ currentUserData }) => {
  const [newPassword, setNewPassword] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [loader, isLoading, setIsLoading] = useLoader();

  const changePasswordHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await updatePassword(auth.currentUser, newPassword);
      alert("updated successfully");
      setShowPasswordInput(false);
    } catch (err) {
      alert(err);
    }
    setIsLoading(false);
  };
  return (
    <div className="profile__card">
      <Profile currentUserData={currentUserData} />
      <div className="profile__actions">
        {!showPasswordInput && (
          <Button onClick={() => setShowPasswordInput(true)}>
            Change Password
          </Button>
        )}

        {showPasswordInput && (
          <>
            <input
              type="password"
              placeholder="Enter New Password..."
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
            />
            <Button onClick={changePasswordHandler}>Confirm</Button>
            <Button
              className="profile__actions--secondary"
              onClick={() => setShowPasswordInput(false)}
            >
              Cancel
            </Button>
          </>
        )}
        {loader}
      </div>
    </div>
  );
};

export default ProfileModal;
