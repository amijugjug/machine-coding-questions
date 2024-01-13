// src/App.js
import React, { useState, useEffect } from "react";
import "./AnalogClock.css";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  const hourDegrees = ((hours + minutes / 60) / 12) * 360;

  return (
    <div className="clock">
      <div
        className="hand"
        id="hour"
        style={{ transform: `rotate(${hourDegrees}deg)` }}
      ></div>
      <div
        className="hand"
        id="minute"
        style={{ transform: `rotate(${minuteDegrees}deg)` }}
      ></div>
      <div
        className="hand"
        id="second"
        style={{ transform: `rotate(${secondDegrees}deg)` }}
      ></div>
      <div className="center"></div>

      <div>
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="number"
            // style={{
            //   transform: `rotate(${index * 30}deg) translate(-50%, -50%)`,
            // }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalogClock;
