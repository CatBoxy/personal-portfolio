import { useCallback, useEffect } from 'react';

const useGlowPointer = () => {
  const UPDATE = useCallback(({ x, y }) => {
    document.documentElement.style.setProperty('--x', x.toFixed(2));
    document.documentElement.style.setProperty(
      '--xp',
      (x / window.innerWidth).toFixed(2)
    );
    document.documentElement.style.setProperty('--y', y.toFixed(2));
    document.documentElement.style.setProperty(
      '--yp',
      (y / window.innerHeight).toFixed(2)
    );
  }, []);
  useEffect(() => {
    document.body.addEventListener('pointermove', UPDATE);
    return () => {
      document.body.removeEventListener('pointermove', UPDATE);
    };
  }, []);
  return null;
};

export default useGlowPointer;
