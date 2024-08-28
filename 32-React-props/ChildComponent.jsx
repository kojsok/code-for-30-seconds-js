import React from 'react';

export const ChildComponent = ({ name, age, city }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
};

export default ChildComponent;