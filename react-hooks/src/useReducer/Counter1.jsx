import React, { useReducer } from 'react'

let initialState = 0;
function reducer(currentState, action) {
  switch(action){
    case 'increment':
      return currentState + 1;

    case 'decrement':
      return currentState - 1;

    case 'reset':
      return initialState;
    
    default:
      return currentState;
  }
}

export default function Counter1() {

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{count}</div>
      <button onClick={()=>dispatch('increment')}>Add</button>
      <button onClick={()=>dispatch('decrement')}>Subtract</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
      <button onClick={()=>dispatch()}>Default</button>
    </div>
  )
}
