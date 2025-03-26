import React from 'react';
import { Button } from 'react-bootstrap';
// import './About.css';

function About() {
  return <>
    <section className="about py-5">
      <div className="container">
        <h2>About me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Button variant="primary">Download Resume</Button>
      </div>
    </section>
    </>
}

export default About;