import React, {Component} from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message: 'Welcome brother'
        }
    }
    changeMessage()
    {
        this.setState({
            message: 'Thanks for clicking'
        })
    }
    render(){
        return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=> this.changeMessage()}>Click me!!</button>
        </div>) 
        // return <h1> Example of class Component</h1>
    }
}

export default Message;