import React, { useRef } from "react";


//uncontrolled form
const FirstForm=()=>{
    let nameRef=useRef()
    let passwordRef=useRef()

    let handleSubmit=(e)=>{
        // console.log(e);
        e.preventDefault()
        let name=nameRef.current.value;
        let password=passwordRef.current.value;
        console.log({name,password});
    }
    return(
        <div>
            <h2 align="center">Login Form </h2>
            <form onSubmit={handleSubmit} align="center">
                <input type="text" placeholder="enter your name" ref={nameRef} /><br/><br/>
                <input type="password" placeholder="enter your password" ref={passwordRef}/><br /><br/>
                <button>submit</button>   <a href="#">Forgot Password?</a>
            </form>
        </div>
    )
}

export default FirstForm