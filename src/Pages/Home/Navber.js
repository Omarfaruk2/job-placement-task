import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import "./Navber.css"
import logo from "../../img/logo.png"

const Navber = () => {
    return (

        <div>
            <Navbar collapseOnSelect expand="lg" className='bg-light' variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='logodiv'>
                            <img width="70px" src={logo} alt="" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle className='bg-dark' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto navbarName'>
                            <Link to="/">Home</Link>
                            <Link to="/login">login</Link>
                            <Link to="/signup">Sign out</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navber