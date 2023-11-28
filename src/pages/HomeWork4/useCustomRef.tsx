import { useEffect, useState } from 'react';

interface ICustomRefObject {
  current: any;
}

// Не смог реализовать
export const useCustomRef = (element: any) => {
  const [ref, setRef] = useState<ICustomRefObject>({ current: undefined });

  useEffect(() => {
    if (element !== undefined) {
      setRef((prev) => ({ ...prev, current: element }));
    }
  }, [element]);

  return ref;
};
