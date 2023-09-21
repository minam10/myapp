import React,{Component} from "react";

export default class RegularChild extends Component{
    //example for normal component
    render(){
        console.log("regular child");
        return(
            <div>{this.props.name}</div>
        )
    }
}