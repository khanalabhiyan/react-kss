import React from 'react';
import GrandChildComponent from './GrandChildComponent';

interface ChildProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const ChildComponent: React.FC<ChildProps> = ({ count, setCount }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <GrandChildComponent count={count} setCount={setCount} />
    </div>
  );
};

export default ChildComponent;
