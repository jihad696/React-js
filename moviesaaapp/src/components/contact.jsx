import React, { useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { ThemeContext } from "../../src/context/ThemeContext";

function Contact() {
    const { theme } = useContext(ThemeContext);

    return (
        <Container
            style={{
                backgroundColor: theme === "dark" ? "#343a40" : "#f8f9fa",
                color: theme === "dark" ? "#ffffff" : "#000000",
                padding: "20px",
                borderRadius: "8px",
            }}
            className="my-5"
        >
            <h1>Contact Us</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                </Form.Group>
                <Button variant={theme === "dark" ? "outline-light" : "outline-dark"} type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Contact;