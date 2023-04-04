import React from "react";
import logo from "../../assets/images/Logo.svg";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="nav-link">
        <Link to="/">Shop</Link>
        <Link to="/Order-Review">Order Review</Link>
        <Link to="/Manage-Inventory">Manage Inventory</Link>
        <Link to="/Login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
