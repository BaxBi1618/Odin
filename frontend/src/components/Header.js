import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

function Header(){
    return(
        <Navbar variant='dark' bg='secondary' sticky="top" expand="sm">
            <Container fluid className='px-5'>
                <Navbar.Brand href="/" className="me-5">Odin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    navbarScroll
                    >
                        <Nav.Link as={NavLink} to="/articles" >Artykuły</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" >O nas</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" >Kontakt</Nav.Link>
                    </Nav>
                    <Button variant="primary" className='mx-2' href="/login">Zaloguj</Button>
                    <Button variant="primary" className='mx-2' href="/register">Zarejestruj</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;