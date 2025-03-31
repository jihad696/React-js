import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { ThemeContext } from "../../src/context/ThemeContext";

function About() {
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
            <h1>About Us</h1>
            <p>
                Welcome to MoviesApp! This app allows you to browse and search for your favorite movies.
            </p>
        </Container>
    );
}

export default About;