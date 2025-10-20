import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Header(){
    return(
        <Navbar variant='dark' bg='secondary' sticky="top">
            <Container fluid className='px-5'>
                <Navbar.Brand href="/">Odin</Navbar.Brand>
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                    <Nav.Link href="/articles">Artykuły</Nav.Link>
                </Nav>
                <Button variant="primary">Login</Button>
            </Container>
        </Navbar>
    );
}

export default Header;