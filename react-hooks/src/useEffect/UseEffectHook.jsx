import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const tick = ()=> {
        setCount(count + 1);
    }

    const tick2 = ()=> {
        setCount2(prevCount=>prevCount+1)
    }

    useEffect(()=>{
        let interval = setInterval(()=>{
            tick();
        }, 1000);

        return ()=>clearInterval(interval);
    }, []);

    useEffect(()=>{
        let interval2 = setInterval(()=>{
            tick2();
        }, 1000);

        return ()=>clearInterval(interval2);
    }, [count2] )
  return (
    <div>
      {count}
      {count2}
    </div>
  )
}
