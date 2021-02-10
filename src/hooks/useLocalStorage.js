import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
   const [storedValue] = useState(() => {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
   });

   return [storedValue];
};

export default useLocalStorage;
