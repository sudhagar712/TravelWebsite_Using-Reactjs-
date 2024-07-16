import React from 'react';
import './NavigationBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function NavigationBar() {
    return (
        <Navbar expand='lg' className='position-absolute w-100 z-2'>
            <Container>
                <Navbar.Brand className='text-light'>
                    <Link to='/' className='text-decoration-none fs-3 text-light d-flex'>
                       
                        Sudhagar Travel
                       
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' className='text-light' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className=' w-100 justify-content-center gap-5 fw-bold '>
                        <Nav.Link href='/' className='fs-3'>Home</Nav.Link>
                        <Nav.Link href='/holidays' className='fs-3'>Holidays</Nav.Link>
                        <Nav.Link href='/city-breaks' className='fs-3 text-capitalize'>City breaks</Nav.Link>
                        <Nav.Link href='/destinations' className='fs-3'>Destinations</Nav.Link>
                    </Nav>
                    <Button variant='light'>
                        <Link to='/' className='text-decoration-none text-capitalize text-dark text-nowrap'>Sign in</Link>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;