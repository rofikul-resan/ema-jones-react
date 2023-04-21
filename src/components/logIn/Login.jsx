import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="from-contener">
      <form>
        <h1>Log In</h1>
        <div className="from-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Your Email" />
        </div>
        <div className="from-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Your Password" />
        </div>

        <button className="btn-submit" type="submit">
          Log In
        </button>
      </form>
      <p className="option-text">
        New to Ema-john? <Link to={"/singUp"}>Create New Account</Link>{" "}
      </p>

      <div className="or-line">
        <p>or</p>
      </div>
      <button className="google-btn">
        <img src="./google.svg" alt="" />
        <p> Continue with Google</p>
      </button>
    </div>
  );
};

export default Login;
