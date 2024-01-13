import React from "react";
import { Link } from "react-router-dom";

import "./components.css";
import "./Body.css";
const Body = () => {
  return (
    <div className="body">
      <div className="link-section">
        <Link to="infinite-scroll">Infinite Scroll</Link>
        <Link to="todo-list">Todo List</Link>
        <Link to="drone-simulator">Drone Simulator</Link>
        <Link to="analog-clock">Analog Clock</Link>
        <Link to="type-head">Type Head</Link>
        <Link to="stepper">Stepper</Link>
        <Link to="tic-tac-toe">Tic-Tac-Toe Game</Link>
      </div>
    </div>
  );
};

export default Body;
