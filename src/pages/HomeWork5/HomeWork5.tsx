import { FC, useState } from 'react';

import { Input } from '../../components/ui-kit';

import { useDebounce, useSortedWords } from './hooks';

import s from './HomeWork5.module.css';

export const HomeWork5: FC = () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce(value, 1000);
  const sortedWordsList = useSortedWords(debouncedValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Кастомный хук useDebounce()</h2>
      <div className={s.componentWrapper}>
        <div className={s.field}>
          <Input
            value={value}
            onChange={handleChange}
            name='sortText'
            type='search'
            label='Введите текст:'
          />
        </div>
        <div className={s.listWrapper}>
          <ul>
            {sortedWordsList.map((item, i) => (
              <li key={`${item}-${i}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
