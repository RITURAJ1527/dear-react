import React, {useReducer} from 'react';


let initialState = {
    firstCount: 0,
    secondCount: 0
};
function reducer(currentState, action) {
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

export default function Counter2() {

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{count.firstCount}</div>
      <button onClick={()=>dispatch({type: 'increment' })}>Add</button>
      <button onClick={()=>dispatch({type: 'decrement' })}>Subtract</button>
      <button onClick={()=>dispatch({type: 'reset' })}>Reset</button>

      <button onClick={()=>dispatch({type: 'increment2' })}>Add2</button>
      <button onClick={()=>dispatch({type: 'decrement2' })}>Subtract2</button>

      <div>{count.secondCount}</div>
    </div>
  )
}
