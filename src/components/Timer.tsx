import React, { useState, useEffect } from 'react';

interface TimerProps {
  initialTime: number;
}

export const Timer: React.FC<TimerProps> = ({ initialTime }) => { //using well-defined types(better approach)
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(timerId);
  }, []); // Empty dependency array ensures that the effect runs only once after the initial render

  return <div>Time Remaining: {time} seconds</div>;
};

// component states in React: Mounting, Updating, and Unmounting

