import * as React from "react";

let ButtonClick = () => {
    
    let buttonFunc =()=>{
        let varia=document.getElementById("clickBtn")
        varia.innerHTML = `<div><table style='display : inline-table'><tr><td><b>Name</b></td><td><b>Number</b></td></tr><tr><td>Siddharth</td><td>8698316883</td></tr><tr><td>Mahima</td><td>9673730944</td></tr></table></div>`
    }
    return(
        <div id="clickBtn">
            <button onClick={buttonFunc}>Click me to see table</button>
        </div>
        
    )
}

export default ButtonClick