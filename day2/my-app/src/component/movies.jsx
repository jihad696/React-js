import React from 'react';
import { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Movies() {
    const [movies, setMovies] = useState([])  //useState is a hook that lets you add state to functional

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")  //axios is a promise based http client for the browser and node.js it takes api url as a parameter and returns a promise
           
        .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })   
    
    }, [])
    return  <>
    <Row>
    {movies.map((movie) => 
    {

        <Col>
                 <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={movie.image} />
            <Card.Body>
             <Card.Title>{movie.title}</Card.Title>
             <Card.Text>{movie.title}</Card.Text>
             <Button variant="primary">Go somewhere</Button>
             </Card.Body>
          </Card>
         
        
        </Col>
    
        
        
        }
        
        )}

    </Row>
 

    </>
}