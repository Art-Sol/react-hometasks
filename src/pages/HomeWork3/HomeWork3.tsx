import { FC } from 'react';

import { SortableTable } from './SortableTable';

import s from './HomeWork3.module.css';

const data: Array<Record<string, string | number>> = [
  {
    id: 35,
    userId: 6,
    title: 'A',
  },
  {
    id: 1,
    userId: 7,
    title: 'c',
  },
  {
    id: 175,
    userId: 18,
    title: 'B',
  },
  {
    id: 199,
    userId: 2,
    title: 'd',
  },
];

export const HomeWork3: FC = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Таблица</h2>
      <SortableTable data={data} />
    </div>
  );
};
