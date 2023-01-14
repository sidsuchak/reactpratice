import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import React from 'react'

function RegistrationForm(props) {

  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  const [value, setValue] = useState({
    emailId: '',
    password:'',
    addressOne:'',
    addressTwo:'',
  })


   // const [emailId, setemailId] = useState('');
    // const [password, setPassword] = useState('');
    // const [addressOne, setAddressOne] = useState('');
    // const [addressTwo, setAddressTwo] = useState('');

    
    const [modalShow, setModalShow] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const setEmailId = (e) => {
        setValue(values =>({
          ...values, emailId: e.target.value,
        }))
        
        // setemailId(e.target.value);
      
      };
    const setPassword = (e)=>{
      setValue(values=>({
        ...values, password: e.target.value
      }))

        // setPassword(e.target.value);
    
      };

    const setAddressOne =(e)=>{
      setValue(values=>({
        ...values, addressOne: e.target.value
      }))

        // setAddressOne(e.target.value);
    
      };

    const setAddressTwo=(e)=>{
      setValue(values=>({
        ...values, addressTwo: e.target.value
      }))

        // setAddressTwo(e.target.value);
    
      };

    
    useEffect(() => {
        if (value.emailId.length && value.password.length && value.addressOne.length && value.addressTwo.length) {
          setIsButtonEnabled(true)
        } else {
          setIsButtonEnabled(false);
        }
      }, [value.emailId,value.password,value.addressOne,value.addressTwo]);


  return (
    <>
    <Button variant="primary" onClick={() => setModalShow(true)}>
        Click here to Register!
      </Button>
    <Modal show={modalShow}
        onHide={() => setModalShow(false)}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Registration Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={value.emailId} onChange={setEmailId} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={value.password} onChange={setPassword} type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress" style={{display:'flex',justifyContent:'space-between'}}>
        <Form.Group style={{width:'48%'}}>
            <Form.Label>Address 1</Form.Label>
            <Form.Control value={value.addressOne} onChange={setAddressOne} type="input" placeholder="Address 1" />
        </Form.Group>

        <Form.Group style={{width:'48%'}}>
            <Form.Label>Address 2</Form.Label>
            <Form.Control value={value.addressTwo} onChange={setAddressTwo} type="input" placeholder="Address 2"  />
        </Form.Group> 
      </Form.Group>
      
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" type="submit" disabled={!isButtonEnabled} onClick={handleButtonClick}>
        Submit
      </Button>
        <Button onClick={()=>{setModalShow(false)}}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default RegistrationForm