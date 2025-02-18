import { useEffect, useState } from 'react';

export const useDebounce = (_value: string = '', delay: number = 300) => {
  const [debouncedValue, setDebouncedValue] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(_value || value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, _value]);

  if (_value) {
    return { debouncedValue };
  }

  return { debouncedValue, value, setValue };
};
