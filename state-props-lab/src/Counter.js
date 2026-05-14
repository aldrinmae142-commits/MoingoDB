import React, { useState } from 'react';

function Counter({ label, onCountChange }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    const nextCount = count + 1;
    setCount(nextCount);
    onCountChange(nextCount);
  };

  const decrement = () => {
    const nextCount = count - 1;
    setCount(nextCount);
    onCountChange(nextCount);
  };

  return (
    <div style={{ marginTop: '16px' }}>
      <h2>{label}: {count}</h2>
      <button onClick={increment} style={{ marginRight: '8px' }}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
