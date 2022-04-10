import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' expand='lg'>
        <Container>
          <LinkContainer to='/' style={{ color: 'white' }}>
            <Navbar.Brand>To Do List App</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <LinkContainer to='/' style={{ color: 'white' }}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <Nav className='ms-auto'>
              <LinkContainer to='/login' style={{ color: 'white' }}>
                <Nav.Link className='justify-content-end'>
                  <i className='fas fa-user'></i> Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
