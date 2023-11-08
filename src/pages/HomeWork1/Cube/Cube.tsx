import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import s from './Cube.module.css';

const getRotateForSide = (number: number) => {
  switch (number) {
    case 1:
      return { rotateX: 0, rotateY: 0 };
    case 2:
      return { rotateX: 0, rotateY: -180 };
    case 3:
      return { rotateX: 0, rotateY: -90 };
    case 4:
      return { rotateX: 0, rotateY: 90 };
    case 5:
      return { rotateX: -90, rotateY: 0 };
    case 6:
      return { rotateX: 90, rotateY: 0 };
    default:
      return { rotateX: 0, rotateY: 0 };
  }
};

interface CubeProps {
  isRoll: boolean;
}

export const Cube: FC<CubeProps> = ({ isRoll }) => {
  const [number, setNumber] = useState<number>(1);
  const [additionalRotate, setAdditionalRotate] = useState<number>(360);

  useEffect(() => {
    if (isRoll) {
      setNumber((number) => (number = Math.floor(Math.random() * (6 - 1)) + 1));
      setAdditionalRotate((rotate) => rotate * -1);
    }
  }, [isRoll]);

  const showCubeSideStyles = {
    transform: `
      translateZ(-100px) 
      rotateX(${getRotateForSide(number).rotateX + additionalRotate}deg) 
      rotateY(${getRotateForSide(number).rotateY + additionalRotate}deg)
      `,
  };

  return (
    <div className={s.cubeWrapper}>
      <div className={s.cube} style={showCubeSideStyles}>
        <div className={classNames(s.cubeSide, s.cubeSideOne)}>
          <span className={classNames(s.dot, s.dotCenter)} />
        </div>
        <div className={classNames(s.cubeSide, s.cubeSideTwo)}>
          <span className={classNames(s.dot, s.dotTopLeft)} />
          <span className={classNames(s.dot, s.dotBotRight)} />
        </div>
        <div className={classNames(s.cubeSide, s.cubeSideThree)}>
          <span className={classNames(s.dot, s.dotTopLeft)} />
          <span className={classNames(s.dot, s.dotCenter)} />
          <span className={classNames(s.dot, s.dotBotRight)} />
        </div>
        <div className={classNames(s.cubeSide, s.cubeSideFour)}>
          <span className={classNames(s.dot, s.dotTopLeft)} />
          <span className={classNames(s.dot, s.dotTopRight)} />
          <span className={classNames(s.dot, s.dotBotLeft)} />
          <span className={classNames(s.dot, s.dotBotRight)} />
        </div>
        <div className={classNames(s.cubeSide, s.cubeSideFive)}>
          <span className={classNames(s.dot, s.dotTopLeft)} />
          <span className={classNames(s.dot, s.dotTopRight)} />
          <span className={classNames(s.dot, s.dotCenter)} />
          <span className={classNames(s.dot, s.dotBotLeft)} />
          <span className={classNames(s.dot, s.dotBotRight)} />
        </div>
        <div className={classNames(s.cubeSide, s.cubeSideSix)}>
          <span className={classNames(s.dot, s.dotTopLeft)} />
          <span className={classNames(s.dot, s.dotTopRight)} />
          <span className={classNames(s.dot, s.dotCenterLeft)} />
          <span className={classNames(s.dot, s.dotCenterRight)} />
          <span className={classNames(s.dot, s.dotBotLeft)} />
          <span className={classNames(s.dot, s.dotBotRight)} />
        </div>
      </div>
    </div>
  );
};
