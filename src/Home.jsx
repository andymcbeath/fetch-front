import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container';



export function Home() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container fluid>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Stack gap={3}>
        <Form.Group as={Col} md="3" controlId="validationFullName">
          <Form.Label>Full Name</Form.Label>
          <InputGroup hasValidation>
          <Form.Control
            required
            type="text"
            placeholder="Full Name"
          />
          <Form.Control.Feedback type="invalid">Please provide your full name!</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
          <Form.Control
            required
            type="email"
            placeholder="Please enter a valid email"
          />
          <Form.Control.Feedback type="invalid">Please provide your email address!</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustomPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
            required
              type="password"
              placeholder="Use an incredibly unique password!"
            />
            <Form.Control.Feedback type="invalid">
              Please type in your password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationOccupation">
          <Form.Label>Occupation</Form.Label>
          <Form.Control type="text" placeholder="Current Occupation" required />
          <Form.Control.Feedback type="invalid">
            What is your most recent occupation?
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="What State do you live in?" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" size="md">Submit form</Button>
      </Stack>
    </Form>
  </Container>
  );
}

