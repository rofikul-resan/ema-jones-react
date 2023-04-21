import React from "react";
import "../login.css";
import { Link } from "react-router-dom";

const SingUp = () => {
  return (
    <div>
      <div className="from-contener">
        <form>
          <h1>Sing Up Now</h1>
          <div className="from-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Your Email" />
          </div>
          <div className="from-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
            />
          </div>
          <div className="from-control">
            <label htmlFor="conform-pass">Conform Password</label>
            <input
              type="password"
              name="conform-pass"
              placeholder="Conform Your Password"
            />
          </div>

          <button className="btn-submit" type="submit">
            Sing Up
          </button>
        </form>
        <p className="option-text">
          Already have an account? <Link to={"/singUp"}>Login</Link>{" "}
        </p>

        <div className="or-line">
          <p>or</p>
        </div>
        <button className="google-btn">
          <img src="./google.svg" alt="" />
          <p> Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default SingUp;
