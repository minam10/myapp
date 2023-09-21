import React,{useMemo, useState} from "react";

const Parent2=()=>{
    let [count1, setCount1]=useState(0);
    let [count2, setCount2]=useState(10);
    let isEven=useMemo(()=>{
        //lets make this complex
        let i=0
        while(i<=999999) i++;
        return count1 % 2==0;

    },[count1])
    return(
        <div>
            <button onClick={()=> setCount1(count1+1)}>count1-{count1}</button>
            {isEven?"even":"odd"}
            <button onClick={()=> setCount2(count2+1)}>count2-{count2}</button>
        </div>
    )
}

export default Parent2