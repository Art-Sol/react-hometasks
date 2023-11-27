import { FC, useCallback, useMemo, useReducer, useState } from 'react';

import { Th } from './components';
import { ISortReducerAction, TSortOrders, TSortedColumns } from './types';
import { sortDataByNumberValues, sortDataByTextValues } from './utils';

import s from './SortableTable.module.css';

interface IProps {
  data: Array<Record<string, string | number>>;
}

const sortReducer = (
  state: Array<Record<string, string | number>>,
  action: ISortReducerAction
) => {
  let sortedData = [...state];

  switch (action.type) {
    case 'id':
      return sortDataByNumberValues(
        sortedData,
        action.type,
        action.payload === 'desc'
      );
    case 'userId':
      return sortDataByNumberValues(
        sortedData,
        action.type,
        action.payload === 'desc'
      );
    case 'title':
      return sortDataByTextValues(
        sortedData,
        action.type,
        action.payload === 'desc'
      );
    default: {
      return state;
    }
  }
};

export const SortableTable: FC<IProps> = ({ data }) => {
  const [state, dispatch] = useReducer(sortReducer, data);
  const [sortedColumn, setSortedColumn] = useState<TSortedColumns>('none');

  const headerTitles = useMemo(() => {
    return Object.keys(data?.[0]) as TSortedColumns[];
  }, [data]);

  const handleSort = useCallback(
    (column: TSortedColumns, order: TSortOrders) => {
      setSortedColumn(column);
      dispatch({ type: column, payload: order });
    },
    []
  );

  return (
    <table className={s.table}>
      {/* table Header */}
      <thead className={s.thead}>
        <tr>
          {headerTitles.map((title) => (
            <Th
              key={title}
              title={title}
              sortFunc={handleSort}
              sortedColumn={sortedColumn}
            />
          ))}
        </tr>
      </thead>

      {/* Table Body */}
      <tbody className={s.tbody}>
        {state.map((row) => (
          <tr key={row.title}>
            {Object.values(row).map((value, i) => (
              <td key={`${value}-${i}`}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
