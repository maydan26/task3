import { useEffect, useRef, useState } from "react";

export const useDebounceValue = (value, time) => {
  const [debounceValue, setDebounceValue] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceValue(value);
    }, time);

    return () => clearTimeout(timerId);
  }, [value, time]);

  return debounceValue;
};

export const useDebounce = (func, time) => {
  const timerId = useRef(null);

  const debFunc = (...args) => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => {
      func(...args);
      timerId.current = null;
    }, time);
  };

  return debFunc;
};
