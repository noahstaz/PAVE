import React, { useState } from 'react';
import { Button } from 'antd';
import Modal from 'react-bootstrap/Modal';
import Input from 'antd/es/input/Input';
import { message } from 'antd';
function Example3() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    message.success("Success, pending approval!")
    setShow(false)};

  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        PAVE transfer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Transfer Money</Modal.Title>
        </Modal.Header>
        <Modal.Body>Just one more step</Modal.Body>
        <Input
        placeholder='Who do you want to send your money to'> 

        </Input>
        <li>
          <ul>user1</ul>
          <ul>user1</ul>
          <ul>user1</ul>
        </li>
        <Input placeholder='Enter amount'> 
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

export default Example3;