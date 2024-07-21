import React, { useState } from 'react'


const Counter = ()=>{
  
  const [count,setCount] = useState(0)

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      {count>0 && <button onClick={()=>setCount(count-1)}>Decrease</button>}
      
      <div>Count - {count}</div>
    </div>
  )
}

export default Counter
