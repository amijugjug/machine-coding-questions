import { useCallback, useEffect, useRef, useState } from "react";

export const useTimer = (totalTime) => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(totalTime);
  const timer = useRef(null);

  const start = useCallback(() => {
    timer.current = setInterval(() => {
      setSeconds((updateSecond) => updateSecond - 1);
    }, 1000);
    setIsRunning(true);
    return timer.current;
  }, [setIsRunning, setSeconds]);

  const stop = useCallback(() => {
    clearInterval(timer.current);
    setIsRunning(false);
  }, [setIsRunning]);

  const reset = useCallback(() => {
    stop();
    setSeconds(totalTime);
  }, [stop, totalTime]);

  useEffect(() => {
    if (seconds < 1) {
      reset();
    }
  }, [seconds, reset]);

  useEffect(() => {
    return () => timer && clearInterval(timer.current);
  }, []);

  return { isRunning, start, stop, seconds, reset };
};
