import React, { useState } from "react";
import Timer from "./Timer";

import "./MultiTimers.css";
const MultiTimers = () => {
  const MAX_TIMERS = 1024;
  const [timerArray, setTimerArray] = useState([]);

  const addTimer = () => {
    const _timerArray = [...timerArray];
    _timerArray.push(MAX_TIMERS - timerArray.length);
    setTimerArray([..._timerArray]);
  };

  const removeTimer = (timerId, index) => {
    const _timerArray = [...timerArray];
    _timerArray.splice(index, 1);
    clearInterval(timerId);
    console.log("remainingTimers : ", _timerArray);
    setTimerArray(() => [..._timerArray]);
  };

  const clearAllTimers = () => {
    timerArray.forEach((timer) => {
      clearInterval(timer);
    });
  };

  const replaceTimerId = (timerId, index) => {
    let _timerArray = [...timerArray];
    _timerArray[index] = timerId;
    console.log("_timerArray : ", _timerArray);
    setTimerArray([..._timerArray]);
  };

  return (
    <div className="container">
      <div className="action-button-container">
        <button onClick={addTimer} className="action-button">
          Add Timer{" "}
        </button>
        <button onClick={clearAllTimers} className="action-button">
          Reset All Timers{" "}
        </button>
      </div>
      <div className="multi-timer-container">
        {timerArray.map((id, index) => {
          return (
            <>
              <i>{index}</i>
              <Timer
                remove={() => removeTimer(id, index)}
                getIdOfTimer={(timerId) => replaceTimerId(timerId, index)}
                key={index}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MultiTimers;
