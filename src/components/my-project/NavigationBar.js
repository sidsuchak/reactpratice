import React, { useState } from 'react'
import './Navigation.css'

function NavigationBar() {

  const arr = [
    {
      id: 1,
      name: 'HOME'
    },
    {
      id: 2,
      name: 'ABOUT US'
    },
    {
      id: 3,
      name: 'CONTACT US'
    },
    {
      id: 4,
      name: 'PRICING'
    }
  ]
  
    const [textMsg, setTextMsg] = useState('Click on a button to see where you are');
    const msgs = [arr[0].name,arr[1].name,arr[2].name,arr[3].name]

    function buttonClick(index){
      setTextMsg('Welcome to ' + msgs[index] + ', you came here times')
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
