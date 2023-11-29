import React from 'react';

interface GrandChildProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const GrandChildComponent: React.FC<GrandChildProps> = ({ count, setCount }) => {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default GrandChildComponent;
