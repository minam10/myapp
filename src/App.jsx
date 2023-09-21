
//class base component

// import React, {Component} from 'react';

//  export default class App extends Component{
//     render(){
//         return(
//     <h1>App</h1>
//         )
            
        
//     }
//  }

//function based component

// import React, { useState } from "react";

// const App=()=>{
//     let[name,setName]=useState("minam");
// // console.log(state);

// let changeName=()=>{
// setName("mohammed minam")
// }
//     return (
//     <div>
//         <h2>Name is :</h2>
//         <h2>{name}</h2>
//         <button onClick={changeName}>Change my name</button>
//     </div>
//     );
// }

// export default App;

//rules to use hooks
//1.hooks can be only used in fbc(function based components)
//2.hooks always starts with "use".
//3.hooks should be written at component level, we should not write it inside any methods or something

// import React, { useState } from "react";
// const App=()=>{
//     let[value,setValue]=useState({
//         countA: 0,
//         countB: 10
//     });

//     const changeCountA =()=>{
//         setValue({countA:value.countA+1})
//     }
//     const changeCountB =()=>{
//         setValue({countB:value.countB+10})
//     }
//     return(
//         <div>
//             <h2>{value.countA}</h2>
//             <h2>{value.countB}</h2>
//             <button onClick={changeCountA}>Change the countA</button>
//             <button onClick={changeCountB}>Change the countB</button>
//         </div>
//     )
// }
// export default App;


//01-09-2023 props drilling
import React from "react"
import Parent1 from "./Parent1";

const App=()=>{
    return(
        <div>
            <h2>App starts here</h2>
            <Parent1 name="reactjs" duration="25"/>
        </div>
    )
}

export default App