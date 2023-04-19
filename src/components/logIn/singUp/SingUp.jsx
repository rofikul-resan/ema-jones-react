import React from "react";
import "./singUp.css";

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
      </div>
    </div>
  );
};

export default SingUp;
