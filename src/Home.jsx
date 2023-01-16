import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'

// this function seems big?
// seperate get request
// seperate
export function Home () {
  const [validated, setValidated] = useState(false)
  const [data, setData] = useState([])
  const [selectedOccupation, setSelectedOccupation] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedEmail, setSelectedEmail] = useState('')
  const [selectedPassword, setSelectedPassword] = useState('')
  const [selectedFullName, setSelectedFullName] = useState('')


  useEffect(() => {
    axios.get('https://frontend-take-home.fetchrewards.com/form')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  const { occupations } = data
  const options = occupations
    ? occupations.map((item) => <option key={item} value={item}>{item}</option>)
    : []

  const { states } = data
  const options2 = states
    ? states.map((item) => <option key={item.name} value={item.abbreviation}> {item.abbreviation} - {item.name}</option>)
    : []

  const handleSubmit = (event) => {

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
    const formData = {
      name: selectedFullName,
      email: selectedEmail,
      password: selectedPassword,
      occupation: selectedOccupation,
      state: selectedState

    }

    axios.post('https://frontend-take-home.fetchrewards.com/form', formData)
      .then(response => {
        console.log('hello response')
        console.log(response)
        console.log(response.status)
      })
      .catch(error => {
        console.log('hello error')
        console.log(error)
        console.log(error.response)
      })
  }

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
            name="name"
            value={selectedFullName}
            onChange={e => setSelectedFullName(e.target.value)}/>
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
            value={selectedEmail}
            onChange={e => setSelectedEmail(e.target.value)} name="email"/>
          <Form.Control.Feedback type="invalid">Please provide your email address!</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="5" controlId="validationCustomPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              required
              type="password"
              value={selectedPassword}
              placeholder="Use an incredibly unique password!"
              name="password"
              onChange={e => setSelectedPassword(e.target.value)}/>
            <Form.Control.Feedback type="invalid">
              Please type in your password!
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="5" controlId="validationCustomOccupation">
          <Form.Label>Occupation</Form.Label>
            <InputGroup hasValidation>
            <Form.Select required
              className="custom-select"
              value={selectedOccupation}
              onChange={e => setSelectedOccupation(e.target.value)} name="occupation">
                <option value="">Select Your Occupation</option>
              {options}
            </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select your current occupation!
          </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="5" controlId="validationState">
          <Form.Label>State</Form.Label>
            <InputGroup hasValidation>
            <Form.Select required
              className="custom-select"
              value={selectedState}
              onChange={e => setSelectedState(e.target.value)} name="state">
                <option value="">Please select what state you currently live in!</option>
              {options2}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select the current state you live in!
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Button type="submit" onClick={(e) => handleSubmit(e, selectedOccupation, selectedState, selectedPassword, selectedFullName, selectedEmail)}>Submit</Button>
      </Stack>
    </Form>
    </Container>
  )
}

export default Home
