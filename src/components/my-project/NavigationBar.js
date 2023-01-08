import React, { useState } from 'react'
import './Navigation.css'

function NavigationBar() {

  const arr = [
    {
      id: 1,
      name: 'HOME',
      count: 0
    },
    {
      id: 2,
      name: 'ABOUT US',
      count: 0
    },
    {
      id: 3,
      name: 'CONTACT US',
      count: 0
    },
    {
      id: 4,
      name: 'PRICING',
      count: 0
    }
  ]
  
    const [textMsg, setTextMsg] = useState('Click on a button to see where you are');
    const msgs = [arr[0].name,arr[1].name,arr[2].name,arr[3].name]
    const countmsgs = [arr[0].count,arr[1].count,arr[2].count,arr[3].count]

    
    function buttonClick(index){
      countmsgs[index] = countmsgs[index] + 1
      setTextMsg('Welcome to ' + msgs[index] + ', you came here '+countmsgs[index]+' times')
    }

  return (
    <div>
      <button key={arr[0].id} className='navbuttoncss' onClick={()=> buttonClick(0)}>{arr[0].name}</button>
      <button key={arr[1].id} className='navbuttoncss' onClick={()=> buttonClick(1)}>{arr[1].name}</button>
      <button key={arr[2].id} className='navbuttoncss' onClick={()=> buttonClick(2)}>{arr[2].name}</button>
      <button key={arr[3].id} className='navbuttoncss' onClick={()=> buttonClick(3)}>{arr[3].name}</button>      

      <p>{textMsg}</p>
      
    </div>
  )
}

export default NavigationBar
