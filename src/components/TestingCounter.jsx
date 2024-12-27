import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const TestingCounter = () =>{

    const { state, dispatch } = useContext(CounterContext);


    return(
        <>
        <h1>Hello {state.count}</h1>

        
        </>
    )
}

export default TestingCounter;