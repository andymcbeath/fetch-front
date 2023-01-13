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
  const [selectedOccupation, setSelectedOccupation] = useState('');
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    axios.get('https://frontend-take-home.fetchrewards.com/form')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])

  const { occupations } = data;
  const options = occupations
    ? occupations.map((item) => <option key={item} value={item}>{item}</option>)
    : []

  const { states } = data;
  const options2 = states
    ? states.map((item) => <option key={item.name} value={item.abbreviation}> {item.abbreviation} - {item.name}</option>)
    : []

  const handleSubmit = (event) => {
    if (!data) return
    event.preventDefault();
    const formData = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
      occupation: selectedOccupation,
      state: selectedState
    }

    axios.post("https://frontend-take-home.fetchrewards.com/form", formData)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  return data.length === 0
    ? (
      <div>Loading...</div>
      )
    : (
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
            name="name"
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
            name="email"
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
              name="password"
            />
            <Form.Control.Feedback type="invalid">
              Please type in your password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="5" controlId="validationCustomOccupation">
          <Form.Label>Occupation</Form.Label>
            <InputGroup hasValidation>
            <Form.Select required 
              className="form-control" 
              value={selectedOccupation} 
              onChange={e => setSelectedOccupation(e.target.value)} name="occupation">
              {options}
            </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select your current occupation
          </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="5" controlId="validationState">
          <Form.Label>State</Form.Label>
            <InputGroup hasValidation>
            <Form.Select required 
              className="form-control" 
              value={selectedState} 
              onChange={e => setSelectedState(e.target.value)} name="State">
              {options2}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select the current state you live in
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Button type="submit" onClick={(e) => handleSubmit(e, selectedOccupation, selectedState)}>Submit</Button>
      </Stack>
    </Form>
    </Container>
  );
}

export default Home;