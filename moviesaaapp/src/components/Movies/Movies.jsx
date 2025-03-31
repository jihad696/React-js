import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../Store/Slices/movies";
import { Card, Row, Col, Container, Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import LinkComponent from "../LinkComponent";
import { ThemeContext } from "../../context/ThemeContext";

function Movies() {
    const dispatch = useDispatch();
    const { movies, loading, error } = useSelector((state) => state.movies);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const displayedMovies = selectedMovie
        ? [selectedMovie]
        : movies.filter((movie) =>
              movie.title?.toLowerCase().includes(searchTerm.toLowerCase())
          );

    return (
        <div>
            <Navbar bg={theme === "dark" ? "dark" : "light"} variant={theme === "dark" ? "dark" : "light"} expand="lg" className="mb-4">
                <Container>
                    <Navbar.Brand>
                        <LinkComponent to="/" className={`text-decoration-none ${theme === "dark" ? "text-light" : "text-dark"}`}>
                            MoviesApp
                        </LinkComponent>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as="div">
                                <LinkComponent to="/about" className={`text-decoration-none ${theme === "dark" ? "text-light" : "text-dark"}`}>
                                    About
                                </LinkComponent>
                            </Nav.Link>
                            <Nav.Link as="div">
                                <LinkComponent to="/contact" className={`text-decoration-none ${theme === "dark" ? "text-light" : "text-dark"}`}>
                                    Contact
                                </LinkComponent>
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search Movies"
                                className="me-2"
                                aria-label="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Button variant={theme === "dark" ? "outline-light" : "outline-dark"}>Search</Button>
                        </Form>
                        <Button variant="secondary" className="ms-3" onClick={toggleTheme}>
                            Toggle to {theme === "light" ? "Dark" : "Light"} Theme
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <h1 className="my-4 text-center">Movies</h1>
                {selectedMovie && (
                    <div className="text-center mb-4">
                        <Button variant="secondary" onClick={() => setSelectedMovie(null)}>
                            Show All Movies
                        </Button>
                    </div>
                )}
                <Row>
                    {(displayedMovies || []).map((movie) => (
                        <Col key={movie.id} sm={12} md={6} lg={3} className="mb-4">
                            <Card className={`h-100 shadow-sm ${theme === "dark" ? "bg-secondary text-light" : "bg-white text-dark"}`}>
                                <Card.Img
                                    variant="top"
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title || movie.name}
                                    style={{ height: "300px", objectFit: "cover" }}
                                />
                                <Card.Body>
                                    <Card.Title className="text-truncate">
                                        {movie.title || movie.name}
                                    </Card.Title>
                                    <Card.Text
                                        className="text-truncate"
                                        style={{
                                            maxHeight: "50px",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {movie.overview || "No description available."}
                                    </Card.Text>
                                    <Button
                                        variant="primary"
                                        onClick={() => setSelectedMovie(movie)}
                                    >
                                        Show This Movie
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Movies;