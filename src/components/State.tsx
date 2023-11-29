import React, { useState } from 'react';

export const Car: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = (incrementBy: number) => {
    setCount(count + incrementBy);
  };

  return (
    <>
      <h1>My {count}</h1>
      <button type="button" onClick={() => incrementCount(1)}>
        Increment
      </button>
    </>
  );
};

