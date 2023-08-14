import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Navbar.css'

function NavbarTop() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#zStore">Buy Merch</Nav.Link>
            <NavDropdown title="Quick Links" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://9animetv.to/watch/dragon-ball-super-1692?ep=22219" target="blank">Watch Dragonball Super Online Free</NavDropdown.Item>
              <NavDropdown.Item href="https://mangaplus.shueisha.co.jp/titles/100012" target="blank">
                Read Dragonball Super Manga online free
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.dbzgames.org/games/" target="blank">
                Play Games
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button id='SearchButton' variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;