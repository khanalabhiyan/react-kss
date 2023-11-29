import React from 'react';

export const ReactList: React.FC = () => {
  const myList = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];

  const listItems = myList.map((item, index) => (
    <li key={index}>{index+1}. {item}</li>
  ));

  return <ul>{listItems}</ul>;
};

