import { faHeartCrack, faSadCry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./error404.css";
import { useNavigate } from "react-router-dom";
const Error404 = () => {
  const navigation = useNavigate();
  return (
    <div className="error-contener">
      <div>
        <h1>
          <span> 404</span>{" "}
          <FontAwesomeIcon className="error-icon" icon={faHeartCrack} />{" "}
        </h1>
        <p>
          PAGE NOT FOUND The page you are looking for might have been removed
          had its name changed or is unavailable,
        </p>
        <button onClick={() => navigation("/")} className="back-home-btn">
          GO TO HOMEPAGE
        </button>
      </div>
    </div>
  );
};

export default Error404;
