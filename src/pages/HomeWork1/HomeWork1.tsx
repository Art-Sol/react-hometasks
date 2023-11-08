import { useState, FC, useMemo } from 'react';

import { Cube } from './Cube';
import { Button } from './Button';

import s from './HomeWork.module.css';

type CubeQuantityType = 1 | 2;

const ANIMATION_TIME_HW1 = 1500;

export const HomeWork1: FC = () => {
  const [goRoll, setGoRoll] = useState<boolean>(false);
  const [cubeQuantity, setCubeQuantity] = useState<CubeQuantityType>(1);

  const handleRollCube = () => {
    setGoRoll(true);

    setTimeout(() => {
      setGoRoll(false);
    }, ANIMATION_TIME_HW1);
  };

  const handleChangeCubeQuantity = () => {
    setCubeQuantity((prev) => (prev === 1 ? 2 : 1));
  };

  const getCubes = (quantity: number) => {
    let cubes: JSX.Element[] = [];
    for (let i = 0; i < quantity; i++) {
      cubes.push(<Cube key={i} isRoll={goRoll} />);
    }
    return cubes;
  };

  const cubes = useMemo(() => getCubes(cubeQuantity), [cubeQuantity, goRoll]);

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Эмулятор игральных костей</h2>
      <div className={s.cubeArea}>{cubes}</div>
      <div className={s.btnWrapper}>
        <Button
          onClick={handleRollCube}
          disabled={goRoll}
          animationTime={ANIMATION_TIME_HW1}
        >
          {cubeQuantity === 1 ? 'Кинуть кубик' : 'Кинуть кубики'}
        </Button>
        <Button onClick={handleChangeCubeQuantity} disabled={goRoll}>
          {cubeQuantity === 1 ? 'Два кубика' : 'Один кубик'}
        </Button>
      </div>
    </div>
  );
};
