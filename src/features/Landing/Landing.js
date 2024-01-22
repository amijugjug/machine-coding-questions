import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

import "./Landing.css";

const Landing = () => {
  const [showForm, setShowForm] = useState("login");
  const handleFormSwitch = (form) => {
    setShowForm(form);
  };
  return (
    <div className="landing-container">
      <div className="form-select-container">
        <button
          className="form-select-button"
          onClick={() => handleFormSwitch("login")}
        >
          <span className="button-text">Login</span>
        </button>
        <button
          className="form-select-button"
          onClick={() => handleFormSwitch("register")}
        >
          <span className="button-text">Register</span>
        </button>
      </div>
      <div className="form-display-container">
        <div>{showForm === "login" ? <Login /> : <Register />}</div>
        <div className="social-login"></div>
      </div>
    </div>
  );
};

export default Landing;
