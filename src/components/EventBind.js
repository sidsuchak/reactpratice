import React, { useState } from 'react'

const EventBind = () => {
  const [message, setMessage] = useState("Hello")

  function changeMessage(){
    setMessage('Goodbye')
  }
  return (
    <div>
      <div>The message is {message}</div>
      <button onClick={changeMessage}>Click me broooo</button>
    </div>
  )
}
export default EventBind
