import React from "react";

import "./common.css";
import { registrationInfoRequired } from "./LandingUtils";

const Register = () => {
  const handleOnSubmit = () => {};

  return (
    <div className="registration-container">
      <form onSubmit={handleOnSubmit}>
        {registrationInfoRequired.map((item) => {
          return (
            <div className="item" key={item.id}>
              <input
                type="text"
                className="item-input"
                placeholder={item.placeHolder}
              />
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
