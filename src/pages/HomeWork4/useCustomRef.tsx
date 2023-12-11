import { useMemo } from 'react';

export function useCustomRef<T>(initialValue?: T | null) {
  return useMemo(() => {
    function F(htmlElement: T) {
      F.current = htmlElement;
    }
    F.current = initialValue;
    return F;
  }, []);
}
