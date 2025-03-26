import React, { use } from "react";
import { useParams } from "react-router-dom";



function MovieDetails() {
    const {id} = useParams();   
    useEffect( () => {     // use effect cannot return promise so  use async await for fetchMovieDetails() function
        async function fetchMovieDetails() {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}`)
            console.log(res.data)
     
     
        }
    },[])
  
    return <>
    <h1>Movie Details</h1>
    <p>{id}</p>
    </>
}