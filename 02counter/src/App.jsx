import { useState } from 'react';
import './App.css'
import Diary from './Diary';

function App() {

  let [counter1, setCounter] = useState(0);
  let [counter2, setCounter2] = useState(6);

  const incrementValue = ()=> {
    console.log("clicked", Math.random());
    if(counter1 <20)setCounter(counter1 + 1);
    setCounter2(counter2++);   /////////////  issue
  }

  const decrement = ()=>{
    console.log("clicked -", Math.random());
    if(counter1 > -20)setCounter(counter1 - 1);
    setCounter2(counter2--);   /////////////  issue
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value1(with +1, -1): {counter1}</h2>
      <h2>Counter value2(with ++, --): {counter2}</h2>

      <button onClick={incrementValue}>
        Add value
      </button>

      <button onClick={decrement}>
        Subtract
      </button>


      <Diary name="Raj" greet="Good Morning"></Diary>
    </>
  )
}

export default App
