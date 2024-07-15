import { useState } from "react"

const ColorChanger = () =>{
const [colors, setColors] = useState([])
   return(
    <>
    <button onClick={()=>{
        setColors([...colors, randomColorGenerator()])
    }}>CLICK ME TO CHANGE COLOR</button>

<div style={{height:100, width:100, backgroundColor: randomColorGenerator()}}></div>

    </>
)
}

const randomColorGenerator = ()=>{
    const red = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

export default ColorChanger