import React from 'react';
import { Button } from 'react-bootstrap';
// import './Footer.css';

function Footer() {
  return  <>
    <footer className="footer py-5 bg-dark text-white">
      <div className="container text-center">
        <p>GET IN TOUCH</p>
        <Button variant="primary">Contact Me</Button>
      </div>
      <div className="footer-bottom text-center py-3">
        <p>&copy; 2023 Katie Reed</p>
      </div>
    </footer>
  </> 
}

export default Footer;