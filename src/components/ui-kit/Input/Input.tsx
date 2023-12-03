import { FC } from 'react';
import s from './Input.module.css';

interface IProps {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name: string;
  label?: string;
}

export const Input: FC<IProps> = ({ value, onChange, type, name, label }) => {
  return (
    <div className={s.field}>
      <label className={s.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={s.input}
        type={type}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
