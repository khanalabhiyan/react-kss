// ParentComponent.tsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponenet';

interface ParentProps {
  message: string;
}

export const ParentComponent: React.FC<ParentProps> = ({ message }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{message}</h1>
      <ChildComponent count={count} setCount={setCount} />
    </div>
  );
};
