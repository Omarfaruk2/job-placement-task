import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import "./Navber.css"
import logo from "../../img/logo.png"
import auth from '../../firebase.init'
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import Lodding from '../Loadding/Lodding'

const Navber = () => {
    const navigate = useNavigate()
    const [user, loading] = useAuthState(auth)

    // console.log(user.photoURL)


    if (loading) {
        return <Lodding></Lodding>
    }

    if (user) {
        // console.log(user)
    }
    const logout = () => {
        signOut(auth)
        navigate("/")

    }
    return (

        <div className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" className='main-nav' variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='logodiv'>
                            <img width="70px" src={logo} alt="" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle className='bg-dark' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto navbarName d-flex align-items-center justify-content-center'>
                            <Link to="/">Home</Link>
                            <Nav.Link href="home#sevices" className='fw-bold' style={{ color: "#0fb" }}  >Sevices</Nav.Link>
                            <Link to="/signup">Register</Link>


                            {/* <Nav.Link href="#services">Service</Nav.Link> */}


                            {user ?
                                <button onClick={logout}
                                    className="btn btn-success"> Log Out</button>
                                :
                                <Link to="/login">Login</Link>
                            }
                            {
                                user ?
                                    <p className='mt-2 mx-2 text-white  fw-bold'>{user?.displayName}</p>
                                    : ""
                            }

                            {/* {
                                user?.photoURL && <img width="70px" src={user?.photoURL} alt="" 
                            } */}




                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navber