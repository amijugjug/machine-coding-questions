import { useCallback, useRef } from "react";

export const useCustomDebounce = (cbF, delay) => {
  const timer = useRef(null);
  return useCallback(
    function () {
      let args = arguments;
      let context = this;

      clearTimeout(timer.current);

      timer.current = setTimeout(() => {
        cbF.apply(context, args);
      }, delay);
    },
    [cbF, delay]
  );
};

export const useCustomDebounceWithLeadingAndTrailing = (
  cbF,
  delay,
  options = { leading: false, trailing: true }
) => {
  const timer = useRef(null);
  const isLeadingOrTrailing = useRef(null); // true indicates leading && false indicates trailing

  return useCallback(
    function () {
      const args = arguments;
      const context = this;

      if (timer.current) clearTimeout(timer.current);

      if (options.leading && !timer.current) {
        isLeadingOrTrailing.current(true);
        cbF();
      } else {
        isLeadingOrTrailing.current(false);
      }

      timer.current = setTimeout(() => {
        if (options.trailing && isLeadingOrTrailing === false)
          cbF().apply(context, args);
      }, delay);
    },
    [cbF, delay, options]
  );
};
