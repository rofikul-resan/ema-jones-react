import React, { useContext, useState } from "react";
import "./header.css";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const UserInfo = ({ user }) => {
  const [showUser, setShowUser] = useState(false);
  const { logOut, setUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Log Out successful");
      })
      .catch((error) => {
        toast(error.massage);
      });
  };

  return (
    <div onClick={() => setShowUser(!showUser)} className="user-info">
      <img src={user.photoURL ? user.photoURL : "./ema-profile.jpg"} alt="" />
      <div className={`userPopUp ${!showUser && "hide"}`}>
        <p>{user.displayName ? user.displayName : "Your name"}</p>
        <p>{user.email}</p>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
    </div>
  );
};

export default UserInfo;
