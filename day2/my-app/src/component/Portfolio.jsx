import React from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import Card from './card'; 
import './Portfolio.css';

function Portfolio() {
  return (
    <>
      <section className="portfolio py-5">
        <Container>
          <h2 className="text-center mb-4">Portfolio</h2>
          
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            <Col>
              <Card name="Web Developer" />
            </Col>
            <Col>
              <Card name="Web Designer" />
            </Col>
            <Col>
              <Card name="Mobile App Design" />
            </Col>
            <Col>
              <Card name="Responsive Design" />
            </Col>
            <Col>
              <Card name="Web Development" />
            </Col>
            <Col>
              <Card name="Mobile App Design" />
            </Col>
          </Row>

        
        </Container>
      </section>
    </>
  );
}

export default Portfolio;
