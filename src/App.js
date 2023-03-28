import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Counter from './components/Counter';
import Foot from './components/Foot';

let App= ()=> {
  return (
    <>
    <Navbar bg="dark" variant="dark" className="navbar-light fixed-top">
      <Container>
        <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        
      </Container>
      
    </Navbar>
    <div className="brand-container">
          <div className="brand-name">
            The Generics
          </div>
        </div>
        <Counter />
        <Foot />
    </> 
  )
}

export default App;