// i can use any type of function to create a component

import Container from 'react-bootstrap/Container';  // import the container from bootstrap-react
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';         

export default function Link({name,url}) {  // use props to pass data from parent to child component or you can use destructuring to pass data ({name,url})
    return <>
     {/* <a href="url" style={{margin:"20px", textDecoration:"none"}}>{name}</a> */}

     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
 
    </>



    // you cannot send props from child to parent component or sibling to sibling component 
    // for using bootstrap you can use CDN or you can install it using npm install bootstrap
    // you can use bootstrap classes in the className attribute
    // but for best practtice you can use boostrap-react
    // npm install react-bootstrap bootstrap => to install bootstrap-react
    // by default if you install bootstrap-react it will install bootstrap as well
}