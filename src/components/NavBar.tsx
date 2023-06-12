import React from 'react'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Home from './Home'
import Articles from './Articles'
import About from './About'


export default function NavBar() {
  return (
    <Router>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">[Cmd][Space] </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/home" }>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/articles" }>Articles</Nav.Link>
                    <NavDropdown title="Demos" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Demo1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Demo2
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Demo3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Demo4
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link eventKey={2} as={Link} to={"/about" }>
                        About us
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <div>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
        </Routes>
    </div>
    </Router>
  )
}
