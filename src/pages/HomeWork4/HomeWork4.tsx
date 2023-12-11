import { FC, useRef } from 'react';

import s from './HomeWork4.module.css';
import { useCustomRef } from './useCustomRef';

const getRandom = (min: number, max: number) => {
  let result = min + Math.random() * (max + 1 - min);
  return Math.floor(result);
};

const addColor = (button: HTMLButtonElement | null | undefined) => {
  if (!button) return;

  const red = getRandom(0, 255);
  const green = getRandom(0, 255);
  const blue = getRandom(0, 255);

  if (button !== null) {
    button.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
  }
};

export const HomeWork4: FC = () => {
  const reactRef = useRef<HTMLButtonElement>(null);
  const customRef = useCustomRef<HTMLButtonElement>(null);

  const handleClickReactRef = () => {
    const button = reactRef.current;
    addColor(button);
  };

  const handleClickCustomRef = () => {
    const button = customRef.current;
    addColor(button);
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Кастомная реализация хука React.useRef()</h2>
      <button className={s.btn} ref={reactRef} onClick={handleClickReactRef}>
        React Ref Button
      </button>
      <button className={s.btn} ref={customRef} onClick={handleClickCustomRef}>
        Custom Ref Button
      </button>
    </div>
  );
};
