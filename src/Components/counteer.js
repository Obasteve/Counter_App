import React, { useState } from 'react';
import './counteer.css';

const Counter = () => {
  const [count, setCount]     = useState(0);
  const [message, setMessage] = useState('');

  const subtractHandler = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage('');
    } else {
      setMessage('You have reached the limit');
    }
  };

  const additionHandler = () => {
    setCount(count + 1);
    setMessage('');
  };

  return (
    <div className="container">
      <h1>Counter</h1>
      <div className="counter-display">
        <h2>{count}</h2>
      </div>
      <div className="counter-buttons">
        <button onClick={additionHandler}>Add</button>
        <button onClick={subtractHandler}>Subtract</button>
      </div>
      {message && <p  style={{ color: 'white' }}>{message}</p>}
    </div>
  );
};

export default Counter;
