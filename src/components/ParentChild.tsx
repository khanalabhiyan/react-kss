import React from 'react';

interface CarProps {
  brand: string;
}

function Car(props: CarProps) {
  return <h2>I am a {props.brand}!</h2>;
}

export default function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}
