import React from "react";
import Children1 from './Children1'

const Parent1=(props)=>{
    return(
        <div>
            <h2>Parent1 starts</h2>
            <h2>{props.name}</h2>
            <h2>{props.duration}</h2>
            <Children1 name={props.name} dur={props.duration}/>
        </div>
    )
}

export default Parent1