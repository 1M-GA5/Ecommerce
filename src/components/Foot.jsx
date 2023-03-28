import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify, faFacebook } from '@fortawesome/free-brands-svg-icons';
import "./Foot.css"


function Foot() {
  return (
   <div >
    <Navbar className='bottom' bg="dark" variant='dark' >
      <Navbar.Brand className="brand">The Generics</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="footer-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faYoutube}  className="icon"/>
          </Nav.Link>
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faSpotify}  className="icon"/>
          </Nav.Link>
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faFacebook}  className="icon"/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   </div>
  );
}

export default Foot;
