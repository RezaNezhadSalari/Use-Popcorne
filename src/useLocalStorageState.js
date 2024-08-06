import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, kay) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(kay);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(kay, JSON.stringify(value));
    },
    [value, kay]
  );
  return [value, setValue];
}
