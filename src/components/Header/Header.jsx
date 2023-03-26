import React from 'react';
import logo from "../../assets/images/Logo.svg";
import "./header.css"


const Header = () => {
    return (
        <nav className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='nav-link'>
                <a href="/Shop">Shop</a>
                <a href="/Order Review">Order Review</a>
                <a href="/Manage Inventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;