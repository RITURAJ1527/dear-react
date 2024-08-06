import React, { useState } from 'react'

export default function Diary({name, greet}) {

  const [angle, setAngle] = useState(0);


  let rotationStyle = {
      transformOrigin: "100% 100%",
      transform: `rotate(${angle}deg)`,
      transition: 'transform 0.3s ease'
  }

  return (
    <div>
      <input 
        type='text'
        onChange={(event)=>setAngle(event.target.value)}
      ></input>
      <img style={rotationStyle} src='https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp'></img>
    </div>
  )
}
