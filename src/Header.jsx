import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'

export function Header () {
  return (
  <Navbar fluidsticky="top">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/src/assets/FetchLogo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Fetch Rewards Front-end Take Home
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header
