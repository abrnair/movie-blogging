import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Section.css";

function MovieCard (props) {
    const movie = props.movie;
    const path = !props.path? '/': props.path;

    return (
        <Link to={path}>
            <img title={`${movie.title || movie.name}`} className="poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.name}/>
        </Link>
    )
}

export default MovieCard;