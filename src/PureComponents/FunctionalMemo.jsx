import React from 'react'

const FunctionalMemo = (props) => {
    console.log("functional memo");
  return (
    <div><h1>
        {props.name}
        </h1>
        </div>
  )
}

export default FunctionalMemo