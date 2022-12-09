import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import './login.css';
export default function Login({show, handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} className='login'>
        <Modal.Header closeButton>
          <Modal.Title>Login to your account</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group>
        <Button className='logBtn' variant='danger'>Continue -&gt;</Button>
        </Form.Group>

      </Form>
        </Modal.Body>
    </Modal>
  )
}
