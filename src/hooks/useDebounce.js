import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedvalue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log("haha");
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);

    //TODO: fix warning deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debouncedvalue;
}

export default useDebounce;
