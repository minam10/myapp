import React, { useRef } from "react";

const UsingRef = () => {
    let inputRef = useRef();
    console.log(inputRef);

    let changeColor = () => {
        inputRef.current.style.background = "blue"
    }




    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={changeColor}>Change</button>
        </div>
    )
}

export default UsingRef

