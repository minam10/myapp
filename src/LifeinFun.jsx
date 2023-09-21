import React,{useEffect,useState} from 'react'

const LifeinFun = () => {

    //! hook - useEffect()
    //? this hook or useEffect() is used to get the functionality of life cycle methods of class based component in fbc

    //! in useEffect() -> accepts two parameters
    //1. call back function
    //2. dependency list array (Not mandatory)
    
    //? syntax - useEffect( ()=>{},[])

    let anotherfunc=()=>{
        console.log("I have nothing to do with other things, iam just here");
    }
    anotherfunc();

    //This useEffect will work based on the dependency list
    //in this case also useEffect will re render again and again depending on the dependency list

    //! this will be equal to render method
    //if dependency is given === componentDidMount()
    //if dependency is not given === render() / componentDidUpdate()

 //? [] this is because of dependency array
    //? equal to componentDidMount()

let[count,setCount]=useState(0);

let inc=()=>{
    console.log("Iam executed");
    setCount(count+1)
}

let [count2, setCount2]=useState(0);

let handleSecond=()=>{
    setCount2(count2 + 5);
};

    useEffect(()=>{
        console.log("lalalala, iam in useEffect");

        // whenever there is a change in state that component will be destroyed first and it will re rendered again 
        // to get functionality of unmounting or componentWillUnmount()
        // we should return a clean up function

        return()=>{
            console.log("component unmounted");
        }
        
        //! Clean up function


    },[count, count2]);


  return (
    <>
    <aside>
    <h1>{count}</h1>
<button onClick={inc}>increase the value</button>
    </aside>

    <aside>
    <h1>{count2}</h1>
<button onClick={handleSecond}>increase to 5</button>
    </aside>
    </>
  )
}

export default LifeinFun;