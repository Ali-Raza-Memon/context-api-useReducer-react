import React from 'react';
import Counter from './components/Counter';
import { CounterProvider } from './context/CounterContext';
import TestingCounter from './components/TestingCounter';

const App = () => {
  return (

    <>

        <CounterProvider>
          <div>
            <h1 style={{ textAlign: 'center' , alignItems:"center"}}>Context API with useReducer</h1>
            <Counter />
          
          </div>

          <TestingCounter />
        
        </CounterProvider>

     
    </>
   

    
  );
};

export default App;
