import { FC, useCallback, useRef, useState } from 'react';

import s from './HomeWork4.module.css';
import { useCustomRef } from './useCustomRef';

const getRandom = (min: number, max: number) => {
  let result = min + Math.random() * (max + 1 - min);
  return Math.floor(result);
};

interface ICustomRefObject {
  current: any;
}

const customRefObj: ICustomRefObject = { current: undefined };

export const HomeWork4: FC = () => {
  //////////// Блок кода с классическим реактовским рефом
  const reactRef = useRef<HTMLButtonElement>(null);

  const handleClickWithReactRef = () => {
    const button = reactRef.current;
    if (!button) return;

    const red = getRandom(0, 255);
    const green = getRandom(0, 255);
    const blue = getRandom(0, 255);

    if (button !== null) {
      button.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
    }
  };
  ////////////////

  //////////// Блок кода с кастомным решением для рефа
  //////////// долго сидел, так и не придумал ничего умнее чем,
  //////////// просто глобальный объект создать
  const [customRef, setCustomRef] = useState(customRefObj);

  const myRef = useCallback((element: any) => {
    setCustomRef((prev) => ({ ...prev, current: element }));
  }, []);

  const handleClickWithCustomRef = () => {
    const button = customRef.current;
    if (!button) return;

    const red = getRandom(0, 255);
    const green = getRandom(0, 255);
    const blue = getRandom(0, 255);

    if (button !== null) {
      button.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
    }
  };
  ////////////

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Кастомная реализация хука React.useRef()</h2>
      <button
        className={s.btn}
        ref={reactRef}
        onClick={handleClickWithReactRef}
      >
        React Ref Button
      </button>
      <button className={s.btn} ref={myRef} onClick={handleClickWithCustomRef}>
        Custom Ref Button
      </button>
    </div>
  );
};
