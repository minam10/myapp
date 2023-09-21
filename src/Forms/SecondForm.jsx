
import React, { useState } from 'react'

//controlled form---1.state, 2.value, 3.onChange

export const SecondForm = () => {
    let [name,setName]=useState("")
    let [password,setPassword]=useState("")

    let handleSubmit=e=>{
        e.preventDefault()
        // console.log(e);
       
        console.log({name,password});
    }
 
  return (
    <section>
        <article>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your name' value={name} onChange={e=>setName(e.target.value)} /> <br /> <br />
            <input type="password" placeholder='Enter your password' value={password} onChange={e=>setPassword(e.target.value)} /> <br /> <br />
            <button>Submit</button>
            </form>
        </article>
    </section>

  )
}

export default SecondForm