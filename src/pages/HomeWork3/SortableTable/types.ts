export type TSortedColumns = 'id' | 'userId' | 'title' | 'none';

export type TSortOrders = 'asc' | 'desc' | 'none';

export interface ISortReducerAction {
  type: TSortedColumns;
  payload: TSortOrders;
}
