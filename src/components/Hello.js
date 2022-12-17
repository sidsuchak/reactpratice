import React from "react";

let Hello = () => {
    // return(
    // <div>
    //     <h1>Hello react</h1>
    // </div>
    // )

    return React.createElement('div',null,React.createElement('h1',null,'Hello React'))
}

export default Hello;