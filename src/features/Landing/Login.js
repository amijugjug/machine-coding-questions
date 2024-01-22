import React from "react";

import { loginInfoRequired } from "./LandingUtils";

import "./Landing.css";
const Login = () => {
  const handleOnSubmit = () => {};
  return (
    <div className="login-container">
      <form onSubmit={handleOnSubmit}>
        {loginInfoRequired.map((item) => {
          return (
            <div className="item" key={item.id}>
              <label className="item-text">{item.label}</label>
              <input type="text" className="item-input" />
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
