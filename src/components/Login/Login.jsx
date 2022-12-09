import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./login.css";
export default function Login({ show, handleClose }) {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
  return (
    <Modal show={show} onHide={handleClose} centered className="login">
      <Modal.Header closeButton>
        <Modal.Title>Login to your account</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email <span className="required">*</span></Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} />
            <span color="danger">{}</span>
          </Form.Group>
          <Form.Group>
            <Button className="logBtn" variant="danger">
              Continue -&gt;
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
