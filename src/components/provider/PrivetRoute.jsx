import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="spinner">
        <FadeLoader color="#36d7b7" />
      </div>
    );
  }
  if (!user) {
    return <Navigate to={"/login"} state={{ location }} />;
  }

  return children;
};

export default PrivetRoute;
