import { FC, useCallback, useEffect, useState } from 'react';

import { SortButton } from '../SortButton/SortButton';
import { TSortOrders, TSortedColumns } from '../../types';

import s from './Th.module.css';

interface IProps {
  title: TSortedColumns;
  sortFunc: (title: TSortedColumns, order: TSortOrders) => void;
  sortedColumn: TSortedColumns;
}

export const Th: FC<IProps> = ({ title, sortFunc, sortedColumn }) => {
  const [order, setOrder] = useState<TSortOrders>('none');

  // Если сортируется другая колонка, устанавливаем для
  // текущей колонки направление сортировки в "none"
  useEffect(() => {
    if (title !== sortedColumn) {
      setOrder('none');
    }
  }, [sortedColumn, title]);

  // Когда нажимаем на кнопку меняется направление сортировки,
  // что запускает функцию сортировки для текущей колонки
  useEffect(() => {
    if (order !== 'none') {
      sortFunc(title, order);
    }
  }, [title, order, sortFunc]);

  const handleClick = useCallback(() => {
    setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  }, []);

  return (
    <th>
      <div className={s.thCell}>
        <span>{title}</span>
        <SortButton onClick={handleClick} order={order} />
      </div>
    </th>
  );
};
