import React from "react";
import Children2 from './Children2'

const Children1=({name,dur})=>{
    return(
        <div>
            <h2>Children1 starts</h2>
            <h2>{name}</h2>
            <h2>{dur}</h2>
            <Children2 nam={name} du={dur}/>
        </div>
    )
}

export default Children1