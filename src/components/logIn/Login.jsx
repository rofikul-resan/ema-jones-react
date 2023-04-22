import React, { useContext, useState } from "react";
import "./login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { login, setUser, singInByGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const prevPage = location?.state?.location?.pathname;

  const handleLogin = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(prevPage);
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        toast("User log in successful");
        navigate(prevPage || "/");
        from.reset();
      })
      .catch((error) => toast(error.massage));
  };

  const loginByGoogle = () => {
    singInByGoogle()
      .then((result) => {
        navigate(prevPage || "/");
        toast("User log in successful");
      })
      .catch((error) => toast(error.massage));
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
      <button onClick={loginByGoogle} className="google-btn">
        <img src="./google.svg" alt="" />
        <p> Continue with Google</p>
      </button>
    </div>
  );
};

export default Login;
