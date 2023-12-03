import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay: number = 500) => {
  const [debValue, setDebValue] = useState<string>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debValue;
};
