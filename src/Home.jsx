import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container';

export function Example() {
  const [validated, setValidated] = useState(false);
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');


  useEffect(() => {
    axios.get('https://frontend-take-home.fetchrewards.com/form')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const options = data.occupations?.map(item => <option key={item.occupations} value={item.occupations}>{item}</option>);
  const options2 = data.states?.map(item => <option key={item.name} value={item.abbreviation}>{item.abbreviation} - {item.name}</option>);

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

<select className="form-control" value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
{options}
</select>
<select className="form-control" value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
{options2}
</select>
<Button type="submit" size="md">Submit form</Button>
</Stack>
</Form>
</Container>
  );
  }

export default Example;