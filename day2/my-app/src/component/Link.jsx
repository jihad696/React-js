import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample()
 {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">

        <Container>

          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* 3l4an n5ly el link activate ya3ni lma a2f 3leh elwn ytt3'y a3m el function de fe className */}
          <NavLink className={({isActive,isPending})=>{isActive?"text-danger" : ""}} to="/login" style= {{margin: "30px" , textDecoration: "none"}}>Home</NavLink>
          <NavLink to="/contact" style= {{margin: "30px" , textDecoration: "none"}}>Products</NavLink>
          <NavLink to="/home" style= {{margin: "30px" , textDecoration: "none"}}>Contact</NavLink>
          <NavLink to="/products" style= {{margin: "30px" , textDecoration: "none"}}>Login</NavLink>
          </Nav>

        </Container>
        
      </Navbar>

    </>
    );
}