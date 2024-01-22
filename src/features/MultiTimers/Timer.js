import React from "react";

import { useTimer } from "../../hooks/useTimer";

import "./Timer.css";
const Timer = ({ getIdOfTimer, remove }) => {
  const startTimer = () => {
    const timerId = start();
    getIdOfTimer(timerId);
  };
  const { isRunning, start, stop, seconds, reset } = useTimer(10);
  return (
    <>
      <div className="timer-container">
        <p className="status-text">
          {isRunning ? "Timer Running" : "Timer Paused at "} : {seconds}s left
        </p>
        <div className="action-buttons">
          <button
            className="timer-btn"
            onClick={startTimer}
            disabled={isRunning}
          >
            Start
          </button>
          <button className="timer-btn" onClick={stop} disabled={!isRunning}>
            Stop
          </button>
          <button className="timer-btn" onClick={reset}>
            Reset
          </button>
          <button className="timer-btn" onClick={remove}>
            Remove
          </button>
        </div>
      </div>
      <hr className="divider" />
    </>
  );
};

export default Timer;
