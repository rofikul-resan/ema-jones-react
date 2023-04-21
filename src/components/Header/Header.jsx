import React, { useContext } from "react";
import logo from "../../assets/images/Logo.svg";
import "./header.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import UserInfo from "./UserInfo";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  return (
    <nav className="header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="nav-link">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "disable")}
          to="/"
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "disable")}
          to="/Order-Review"
        >
          Order Review
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "disable")}
          to="/Manage-Inventory"
        >
          Manage Inventory
        </NavLink>
        <div className="nav-btn">
          {location.pathname !== "/login" ? (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "disable")}
              to="/login"
            >
              Login
            </NavLink>
          ) : (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "disable")}
              to="/singUp"
            >
              Sing up
            </NavLink>
          )}
        </div>

        <UserInfo user={user} />
      </div>
    </nav>
  );
};

export default Header;
