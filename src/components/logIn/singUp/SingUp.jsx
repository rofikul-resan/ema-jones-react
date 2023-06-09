import React, { useContext } from "react";
import "../login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";

const SingUp = () => {
  const { createUserByEmail, singInByGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const prevPage = location?.state?.location?.pathname;
  console.log(prevPage);

  const handleSingUp = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    const conformPass = from.conformPass.value;
    if (password === conformPass) {
      if (password.length < 6) {
        toast("password must be 6 character");
        return;
      } else {
        createUserByEmail(email, password)
          .then((result) => {
            const loggedUser = result.user;
            toast("Account create Successful");
          })
          .catch((error) => {
            toast(error.message);
          });
      }
    } else {
      toast("Make sure your conform password ");
      return;
    }
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
    <div>
      <div className="from-contener">
        <form onSubmit={handleSingUp}>
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
            <label htmlFor="conformPass">Conform Password</label>
            <input
              type="password"
              name="conformPass"
              placeholder="Conform Your Password"
            />
          </div>

          <button className="btn-submit" type="submit">
            Sing Up
          </button>
        </form>
        <p className="option-text">
          Already have an account? <Link to={"/login"}>Login</Link>{" "}
        </p>

        <div className="or-line">
          <p>or</p>
        </div>
        <button onClick={loginByGoogle} className="google-btn">
          <img src="./google.svg" alt="" />
          <p> Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default SingUp;
