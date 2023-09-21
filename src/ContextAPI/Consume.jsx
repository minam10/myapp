// import React from "react";
// import GlobalData from "./Global";

// const Consume=()=>{
//     return(
//         <div>
//             <GlobalData.Consumer>
//                 {
//                     (name)=>{
//                         return <h2>{name}</h2>
//                     }
//                 }
//             </GlobalData.Consumer>
//         </div>
//     )
// }

// export default Consume;

//04-09-2023 useContext

import React, { useContext } from "react";
import GlobalData from "./Global";

const Consume=()=>{
    let {name,sub}=useContext(GlobalData)
    return(
     <div>
        <h2>{name} - {sub}</h2>
     </div>   
    )
}

export default Consume