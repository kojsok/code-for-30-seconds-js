import React from 'react';
import ChildComponent from './ChildComponent';

export const ParentComponent = () => {
  const data = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent name={data.name} age={data.age} city={data.city} />
    </div>
  );
};

export default ParentComponent;