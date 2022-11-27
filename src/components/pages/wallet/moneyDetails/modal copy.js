import React, { useState } from 'react';
import { Button } from 'antd';
import Modal from 'react-bootstrap/Modal';
import Input from 'antd/es/input/Input';
import { message } from 'antd';
function Example2() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    message.success("Success, pending approval!")
    setShow(false)};

  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Request increase
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Credit Limit</Modal.Title>
        </Modal.Header>
        <Modal.Body>Limit Amount</Modal.Body>
        <Input
        placeholder='How much more credit limit do you need'> 
        </Input>
        <Modal.Body> Upload your proof of income </Modal.Body>
        <Input
        type="file"> 
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

export default Example2;