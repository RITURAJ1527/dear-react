import React, { useCallback, useState } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

export default function UseCallback() {

  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  const incrementAge = useCallback(()=>{
    setAge(prevCount => prevCount+1);
  }, [age]);


  const incrementSalary = useCallback(()=>{
    setSalary(prevSalary => prevSalary+1000);
  }, [salary]);

  return (
    <div>
      <Title></Title>
      <Count count={age} text="Age"></Count>
      <Button clickHandler={incrementAge}>Increment Age</Button>
      <Count count={salary} text="Salary"></Count>
      <Button clickHandler={incrementSalary}>Increment Salary</Button>
    </div>
  )
}
