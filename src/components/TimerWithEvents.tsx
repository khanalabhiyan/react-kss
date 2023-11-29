import React, { useState, useEffect, useRef } from 'react';

interface TimerProps {
  initialTime: number;
}

export const TimerWithEvents: React.FC<TimerProps> = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
     setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
  }, []);

  const handleReset = () => {
    setTime(initialTime);
  };

  return (
    <div>
      <div>Time Remaining: {time} seconds</div>
      <button onClick={handleReset}>Reset Timer</button>
    </div>
  );
};
