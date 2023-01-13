import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container';

export function Home() {
  const [validated, setValidated] = useState(false);
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');


  useEffect(() => {
    axios.get('https://frontend-take-home.fetchrewards.com/form')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const { occupations } = data;
  const options = occupations
  ? occupations.map((item) => <option key={item} value={item}>{item}</option>)
  : [];

  const { states } = data;
  const options2 = states
    ? states.map((item) => <option key={item.name} value={item.abbreviation}> {item.abbreviation} - {item.name}</option>)
    : [];

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container-fluid >
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

        <Form.Group as={Col} md="5" controlId="validationCustomOccupation">
          <Form.Label>Occupation</Form.Label>
            <InputGroup has validation>
            <Form.Select required 
              className="form-control" value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
            <option value="">Select your current occupation</option>
            {options}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select your current occupation
          </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="5" controlId="validationState">
          <Form.Label>State</Form.Label>
            <InputGroup has validation>
            <Form.Select 
              className="form-control" value={selectedOption} closeMenuOnSelect={true} onChange={e => setSelectedOption(e.target.value)} required>
            <option value="">Select the current state you reside in</option>
            {options2}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select the current state you live in
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Button type="submit" size="md" >Submit form</Button>
      </Stack>
    </Form>
    </Container-fluid>
  );
}

export default Home;