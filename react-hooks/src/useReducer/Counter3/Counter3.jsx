// Using useReducer and useContext both for handelling global state;

import React, { useReducer } from 'react';
import A from './A';
import B from './B';
import C from './C';

const initialState = {
    firstCount: 0,
    secondCount: 0
};

function reducer( currentState, action){
    switch(action.type){
        case 'increment':
            return {...currentState, firstCount: currentState.firstCount + 1};

        case 'decrement':
            return {...currentState, firstCount: currentState.firstCount - 1};

        case 'reset':
            return initialState;

        case 'increment2':
            return {...currentState, secondCount: currentState.secondCount + 1};

        case 'decrement2':
            return {...currentState, secondCount: currentState.secondCount - 1};
        
        default:
        return currentState;
    }
}

export const Counter3Context = React.createContext();

export default function Counter3() {

    const [state, dispatch] = useReducer(reducer, initialState);

    

    return (
        <div>
            {state.firstCount}
            <Counter3Context.Provider value={{countState: state, countDispatch: dispatch}}>
                <A></A>
                <B></B>
                <C></C>
            </Counter3Context.Provider>
        </div>
    )
}
