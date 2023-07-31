import { useState } from "react";

function Counter2(){
    
    const [count2, setCount2] = useState(null)
    const [clickCounter, setClickCounter] = useState(0)
    

    function handleClick(params){
        if(params === 'increase'){
            setCount2(count2 + 1)
            setClickCounter(clickCounter + 1)
        }
        else if (params === 'decrease'){
            setCount2(count2 - 1)
            setClickCounter(clickCounter + 1)
        }
        else setCount2(0)
    }

    return (
        <>
            <h1>Count : {count2}</h1>
            <button type="button" onClick={()=>{handleClick('increase')}} style={{marginRight: 20}}>Increase</button>          
            <button type="button" onClick={()=>{handleClick('decrease')}} style={{marginRight: 20}}>Decrease</button>
            <button onClick={()=>{handleClick('reset')}}>Reset</button>
            <h1>Click counter: {clickCounter}</h1>
        </>
    )
}

export default Counter2