import { useRef } from "react";

/**
 * Its a useEffect hook that takes cbF and a depsArr.
 * Its a polyfill for react's useEfffect function it does not perform component unmount functionality
 * apart from that every thing works exactly like that.
 */

export const useCustomEffect = (cbF, depsArr) => {
  const isFirstRender = useRef(true);
  const previousDependency = useRef([]);

  // Run once if dependency array exist and is empty
  if (isFirstRender.current && depsArr.length === 0) {
    isFirstRender.current = false;
    const cleanUpFunction = cbF();
    return () => {
      if (cleanUpFunction && typeof cleanUpFunction === "function")
        cleanUpFunction();
    };
  }
  // Rum if dependency array changes || there is no dependency array
  const isDependencyArrayChanged = depsArr
    ? JSON.stringify(depsArr) === JSON.stringify(previousDependency.current)
    : true;

  if (isDependencyArrayChanged) {
    previousDependency.current = depsArr;
    const cleanUpFunction = cbF();
    return () => {
      if (cleanUpFunction && typeof cleanUpFunction === "function")
        cleanUpFunction();
    };
  }
};
