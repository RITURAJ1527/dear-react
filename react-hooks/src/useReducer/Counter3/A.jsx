import React, { useContext } from 'react'
import { Counter3Context } from './Counter3'

export default function A() {
    const counter3Context  = useContext(Counter3Context);

  return (
    <div>
        A: {counter3Context.countState.firstCount}
        <button onClick={()=>counter3Context.countDispatch({type: 'increment'})}>Add</button>
        <button onClick={()=>counter3Context.countDispatch({type: 'decrement'})}>Subtract</button>
        <button onClick={()=>counter3Context.countDispatch({type: 'reset'})}>Reset</button>
      
    </div>
  )
}
