import { useEffect, useRef, useState } from 'react';
import s from './HomeWork2.module.css';

import { mems } from './mems';

export const HomeWork2 = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (ref.current) {
      const scrollHeight = ref.current.scrollTop;
      const totalHeight = ref.current.scrollHeight - ref.current.clientHeight;
      const progress = Math.round((scrollHeight / totalHeight) * 100);

      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    // Приходится ref.current записывать в переменную для избежания проблем
    // при удалении eventListener. См. "Using ref value in useEffect cleanup function"
    // (https://github.com/facebook/react/issues/15841?ysclid=lp780x7m62365012417)
    const element = ref.current;

    element?.addEventListener('scroll', handleScroll);

    return () => element?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Прогрессбар скролла</h2>
      <div className={s.page} ref={ref}>
        <h3>Немножко мемов, чтобы не так скучно было крутить вниз</h3>

        {/* Прогрессбар скролла */}
        <div className={s.scrollbarWrapper}>
          <div className={s.scrollbarBody}>
            <div
              className={s.scrollbarIndicator}
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <div className={s.scrollbarText}>{scrollProgress} %</div>
        </div>
        {/*  */}

        {mems.map((mem) => (
          <div key={mem} className={s.pageBlock}>
            <img src={mem} alt='mem' />
          </div>
        ))}
      </div>
    </div>
  );
};
