import React, { useState } from 'react';
import { Button } from 'antd';
import Modal from 'react-bootstrap/Modal';
import Input from 'antd/es/input/Input';
import { message } from 'antd';
function Example4() {
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState(0);
  const handleClose = () => {
    localStorage.setItem('balance', getBalance()-amount)
    message.success("Success, pending approval!")
    setShow(false)};

  const handleShow = () => setShow(true);
  function onChange(event){
    setAmount(event.target.value);
  }
  function getBalance(){
    return localStorage.getItem("balance");
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Withdraw
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Withdraw</Modal.Title>
        </Modal.Header>
        <Modal.Body>Available funds: {getBalance()}</Modal.Body>
        <Input
        placeholder='How much do you want to withdraw'
        onChange={onChange}> 
        </Input>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example4;