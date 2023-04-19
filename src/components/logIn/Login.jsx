import React from "react";
import "./login.css";

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
    </div>
  );
};

export default Login;
