import React,{Component} from "react";
import RegularChild from './RegularChild'
import PureChild  from "./PureChild";
import FunctionalMemo from "./FunctionalMemo"

export default class Parent1 extends Component{
    state={
        name:"react"
    }
    changeName=()=>{
        this.setState({name:"react"})
    }
    render(){
        console.log("parent component");
        return(
            <div>
                {/* <RegularChild name={this.state.name}/>
                <PureChild name={this.state.name}/> */}
            {/* memo */}
            <FunctionalMemo name={this.state.name}/>
            <button onClick={this.changeName}>Change</button>
            </div>
        )
    }
}