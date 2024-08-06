import React, { useState } from 'react'

export default function UseStateHook() {
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count + 1);
        setTimeout(()=>{
            setCount(prevCount=>prevCount+ 1);
        }, 5000)
    }
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Add</button>
        </div>
    )
}
