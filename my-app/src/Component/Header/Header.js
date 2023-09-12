import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/signin">SignIn</Nav.Link>
                        <Nav.Link href="/signup">SignUp</Nav.Link>
                        <Nav.Link href="/signout">SignOut</Nav.Link>
                        <Nav.Link href="/data">Data</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;