import React from "react";
import logo from "../../assets/images/Logo.svg";
import "./header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "disable")}
          to="/Login"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
