import React from "react";
import logo from "../../assets/images/Logo.svg";
import "./header.css";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
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
    </nav>
  );
};

export default Header;
