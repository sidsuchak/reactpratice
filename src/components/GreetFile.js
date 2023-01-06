import React, { Component } from 'react'

class GreetFile extends Component {

    constructor(props) {
      super(props)
    
      this.state = { isLoggedIn : false
         
      }
    }
    
  render() {
    // If-else condition used for condtional rendering.......

    // if(this.state.isLoggedIn)
    // return(
    //     <div>Welcome my brother</div>
    // )
    // else 
    // return(
    // <div>Sorry logged out</div>)
    
    // Element variable approach user for condtiional renedering...........

    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome my brother</div>
    // }
    // else{
    //     message = <div>Sorry logged out</div>
    // }
    // return message

    //Condtional operator used for conditional rendering........

    return(
        this.state.isLoggedIn ? <div>Welcome my brother</div> : <div>Sorry logged out</div>
    )
  }
}

export default GreetFile



