import React, { useContext, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { login, setUser } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    login(email, password).then((result) => {
      const loggedUser = result.user;
      setUser(loggedUser);
      console.log(loggedUser);
    });
    console.log(email, password);
  };
  return (
    <div className="from-contener">
      <form onSubmit={handleLogin}>
        <h1>Log In</h1>
        <div className="from-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="from-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            required
          />
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
