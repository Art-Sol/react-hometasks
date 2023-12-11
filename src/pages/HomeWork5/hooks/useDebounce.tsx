import { useEffect, useState } from 'react';

export const useDebounce = <T,>(value: T, delay: number = 500) => {
  const [debValue, setDebValue] = useState<T>(value);

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
