import React, { createContext, useReducer } from 'react';

// Step 1: Define initial state
const initialState = { count: 0 };

// Step 2: Create reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Step 3: Create context
const CounterContext = createContext();

// Step 4: Create Provider component
const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
