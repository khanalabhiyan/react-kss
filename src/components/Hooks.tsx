import React, { useState, useEffect } from 'react';

export const MyHook: React.FC = () => {
  // Define state using TypeScript and useState
  const [count, setCount] = useState<number>(0);

  // Use useEffect to update the document title when count changes
  useEffect(() => {
    document.title = `Number of clicks: ${count}`;
  }, [count]); // Dependency array ensures the effect runs when count changes

//   const tempCount: number = 3;

// const incrementCount = (count: number) => {
//     return count ++ ;
// }

  return (
    <div>
      <h3>Number of clicks: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Click to Count</button>
    </div>
  );
};
