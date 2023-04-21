import React, { useState } from "react";
import "./header.css";

const UserInfo = ({ user }) => {
  const [showUser, setShowUser] = useState(false);
  console.log(user);

  return (
    <div className="user-info">
      <img src={""} alt="" />
      <div className={`userPopUp ${showUser ? "Show" : "hide"}`}>
        <p>{user.displayName ? user.displayName : "Set Your name"}</p>
        <p>{user.email}</p>
        <button>Log Out</button>
      </div>
    </div>
  );
};

export default UserInfo;
