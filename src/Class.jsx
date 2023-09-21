// import React, {Component} from 'react'
// import Child from "./Child";

// export default class Class extends Component{
//     constructor(){
//         super();
         
//         this.state={
//             name:"minam",
//         }
//     }


// componentDidMount(){
//     console.log("The component is mounted into the dom");
// }
// //? only once

// componentDidUpdate(){
//     console.log("The Component is updated");
// }
// //? executes whenever the component is updated

// render(){
// return(
// <>
// <h1>{this.state.name}</h1>
// <button onClick={()=> this.setState({name:"mohammed minam"})}>Change the name</button>

// {this.state.name==="minam"? <Child/>:""}
// </>
// )

// }
// }

import React from 'react'

const Class = () => {
  return (
    <div>Class</div>
  )
}

export default Class