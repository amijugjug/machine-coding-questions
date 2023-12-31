import { useEffect, useRef } from "react";

/**
 *
 * @param {*} val
 * @returns val
 *
 * This hook returns the previous value of the state that has been passed to it as a parameter.
 */

export const usePrevious = (val) => {
  const previousValue = useRef(null);

  useEffect(() => {
    previousValue.current = val;
  }, [val]);

  return previousValue.current;
};
