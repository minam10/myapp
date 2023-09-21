import React,{Component, PureComponent} from 'react'

export default class PureChild extends PureComponent{
    //example of pure component
    render(){
        console.log("pure child");
        return(
            <div>{this.props.name}</div>
        )
    }
}



