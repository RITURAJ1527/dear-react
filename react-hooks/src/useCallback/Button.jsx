import React from 'react'

function Button(props) {
  console.log('Rendering Button');

  return (
    <button onClick={props.clickHandler}>
      {props.children}
    </button>
  )
}

export default React.memo(Button);