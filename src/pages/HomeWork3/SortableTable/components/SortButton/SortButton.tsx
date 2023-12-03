import React, { FC, useMemo } from 'react';
import { Button } from '../../../../../components/ui-kit/Button';

import ArrowUp from '../../../assets/arrow-up.svg';
import ArrowDown from '../../../assets/arrow-down.svg';
import NoSort from '../../../assets/minus.svg';
import { TSortOrders } from '../../types';

interface IProps {
  onClick: () => void;
  order: TSortOrders;
}

export const SortButton: FC<IProps> = ({ onClick, order }) => {
  const currentIcon = useMemo(() => {
    switch (order) {
      case 'asc':
        return ArrowDown;
      case 'desc':
        return ArrowUp;
      case 'none':
        return NoSort;
      default:
        return NoSort;
    }
  }, [order]);

  return (
    <Button padding='3px 5px' onClick={onClick}>
      <img src={currentIcon} alt='icon' />
    </Button>
  );
};
