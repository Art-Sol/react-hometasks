import { FC, ReactNode, useState } from 'react';

import s from './Button.module.css';

interface ButtonProps {
  onClick?: () => void;
  animationTime?: number;
  disabled?: boolean;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const { onClick, animationTime = 200, disabled, children } = props;
  const [disableBtn, setDisableBtn] = useState<boolean>(false);

  const handleClick = () => {
    onClick?.();
    setDisableBtn(true);
    setTimeout(() => {
      setDisableBtn(false);
    }, animationTime);
  };

  return (
    <button
      onClick={handleClick}
      className={s.btn}
      disabled={disableBtn || disabled}
      style={disableBtn ? { top: '2px', boxShadow: 'none' } : {}}
    >
      {children}
    </button>
  );
};