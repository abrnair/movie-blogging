import React, { useState, useEffect } from 'react';
import requests from './requests';
import getURL from './axios';
import './Poster.css'

function Poster() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function getData() {
            const fullRequest = await getURL.get(requests.getPopular);
            setMovie(fullRequest.data.results
                [Math.floor(Math.random() * fullRequest.data.results.length)]);
            return fullRequest;
        }
        getData();
    }, []);

    console.log(movie);

    return (
        <div className='headPoster' style={{ backgroundSize: "cover" , 
                      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`, 
                      backgroundPosition: "center center"}}>
            <h1 className="title">{movie.title || movie.name}</h1>
            <br/>
            <p className='subTitle'>Write about what you think about {movie.title || movie.name} today!</p>
        </div>
    )
}

export default Poster;