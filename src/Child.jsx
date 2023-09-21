import React, {Component} from 'react'

export default class Child extends Component{

    //? Mounting Phase

    componentWillUnmount(){
        console.log("Component is unmounted");
    }
    render(){
        return(
            <div>Child</div>
        )
    }
}



