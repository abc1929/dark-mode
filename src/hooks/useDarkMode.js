import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, initialValue) => {
   const [storedValue] = useLocalStorage(key, initialValue);
   const [darkMode, setDarkMode] = useState(storedValue);

   const setDarkModePersistent = (val) => {
      setDarkMode(val);
      window.localStorage[key] = val;
   };
   // overriding default setDarkMode

   return [darkMode, setDarkModePersistent];
};

export default useDarkMode;
