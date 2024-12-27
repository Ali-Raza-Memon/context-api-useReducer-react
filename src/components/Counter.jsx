import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {state.count}</h1>
      <button
        onClick={() => dispatch({ type: 'DECREMENT' })}
        style={{ marginRight: '10px', padding: '10px 20px' }}
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: 'INCREMENT' })}
        style={{ padding: '10px 20px' }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
