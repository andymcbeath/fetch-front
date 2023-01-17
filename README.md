# Fetch-front
## Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [How to Run](#how-to-run)
* [Code Examples](#code-examples)
* [Final Product](#final-product)
* [Testing](#testing)

## General Info
This is a take-home project to create a form that gets data from an api and posts data to an api based on the following prompt: https://fetch-hiring.s3.amazonaws.com/frontend.html.

## Technologies
Project is created with: <br />
React version 18.2.0 <br />
Vite version 4.0.4 <br />
Bootstrap version 5.2.3 <br />
React-Bootstrap version 2.7.0 <br />
Axios version 1.2.2

## How to Run
To run locally 
`npm run dev`

To update dependencies
`npm install`

To view in browser go to:
http://localhost:5173/


## Code Examples
Code for the form:
```
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'

export function Home () {
  const [data, setData] = useState([])
  const [selectedOccupation, setSelectedOccupation] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedEmail, setSelectedEmail] = useState('')
  const [selectedPassword, setSelectedPassword] = useState('')
  const [selectedFullName, setSelectedFullName] = useState('')
  const [validated, setValidated] = useState(false)

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
    const formData = {
      name: selectedFullName,
      email: selectedEmail,
      password: selectedPassword,
      occupation: selectedOccupation,
      state: selectedState
    }
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      axios.post('https://frontend-take-home.fetchrewards.com/form', formData)
        .then(response => {
          console.log('Form submitted successfully')
          console.log(response)
          console.log(response.status)
        })
        .catch(error => {
          console.log('Form submission failed')
          console.log(error)
          console.log(error.response)
        })
    }
    setValidated(true)
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

             <Button type="submit">Submit</Button>
          </Stack>
        </Form>
      </Container>
  )
}

export default Home
```

## Final Product
Invalid form submission: 
<br />
![Screenshot 2023-01-17 at 2 01 39 PM](https://user-images.githubusercontent.com/107561577/212999906-9f7e32d1-c260-4499-965a-4634b3d64401.png)
<br />
Valid form submission Part 1:
<br />
![Screenshot 2023-01-17 at 2 03 38 PM](https://user-images.githubusercontent.com/107561577/213000302-2010f963-27ef-40a8-bc3d-91d5501ea334.png)
<br />
Valid Form Submission in console Part 2: <br />
![Screenshot 2023-01-17 at 2 04 42 PM](https://user-images.githubusercontent.com/107561577/213000549-af722d84-9f30-4e47-a4ec-276ce7770d0a.png)

## Testing
I used Jest to run a test on my form submissions. Honestly, I wasn't able to totally get this to work. As a part of my apprenticeship I would love to dive deeper into how to effectively test using Jest and/or Vitest. Currently when a test is run on this code this is the result:
![Screenshot 2023-01-17 at 2 12 18 PM](https://user-images.githubusercontent.com/107561577/213001936-db049518-b5ff-4d55-8de3-9f0d858680af.png)



