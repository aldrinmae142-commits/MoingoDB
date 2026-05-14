import React, { useState } from 'react';
import Counter from './Counter';
import Greeting from './Greeting';
import Display from './Display';

function App() {
  const [sharedCount, setSharedCount] = useState(0);

  const handleCountChange = (newCount) => {
    setSharedCount(newCount);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '24px' }}>
      <h1>State and Props Lab</h1>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Counter label="My Counter" onCountChange={handleCountChange} />
      <Display value={sharedCount} />
    </div>
  );
}

export default App;
