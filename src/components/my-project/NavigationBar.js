import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Navigation.css"


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

  const [textMsg, setTextMsg] = useState('Click somewhere to see where you are')
  const [count, setCount] = useState(0)

  function navClick(index){
    setCount(count+1)
    arr[index].count = count + 1;
    setTextMsg('Welcome to '+arr[index].name+', you came here '+count+' times')
  }

  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Nav className='navList'>
            {
              arr.map(
                (item, index)=> <Nav.Item key={item.id} onClick={()=>{navClick(index)}} className='navbuttoncss'>{item.name}</Nav.Item>)
            }
          </Nav>
        </Container>
      </Navbar>

      <h2>{textMsg}</h2>
    </>
  )
}

export default NavigationBar
