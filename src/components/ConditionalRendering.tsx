import React from 'react';

export const Ball: React.FC = () => {
  const isGoal: boolean = false;

  const getGoal = (): JSX.Element => {
    if (isGoal) {
      return <h1>Goal!</h1>;
    }
    return <h1>MISSED!</h1>;
  };

  return <>{getGoal()}</>;
};


