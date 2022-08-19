import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import CustomLink from '../Customlink/CustomLink'

const Navber = () => {
    return (

        <div>
            <Navbar collapseOnSelect expand="lg" className='' variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='logodiv'>
                            {/* <img src={logo} alt="" /> */}
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle className='bg-dark' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto navbarName'>
                            <CustomLink to="/about" >ABOUT US</CustomLink>
                            <CustomLink to="/projects" >PROJECTS</CustomLink>
                            <CustomLink to="/diversification" >DIVERSIFICATION</CustomLink>
                            <CustomLink to="/ourprocess" >OUR PROCESS</CustomLink>
                            <CustomLink to="/careers" >CAREERS</CustomLink>
                            <CustomLink to="/contact" >CONTACT</CustomLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navber