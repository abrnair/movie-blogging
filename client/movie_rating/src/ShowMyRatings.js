import axios from 'axios';
import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import getURL from './axios';
import MovieRatingCard from './MovieRatingCard';

import "./Section.css";


function ShowMyRatings() {
    const [listOfMovies, setListOfMovies] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3001/api/movies")
        .then((response) => {
            setListOfMovies(response.data);
        });

    }, []);
    let list;
    let obj;
    {
        list = listOfMovies.map( (movieRating, key1, key2) => {
            return ( 
                <div className='side'>
                    <h2 key={key1}>{movieRating.movie}</h2>
                    <MovieRatingCard movie={movieRating.movie} path={movieRating._id} key={key2}/>
                </div>
            );
        })
    }
    return (
        <div>
            <h1 className="sectionTitle" >YOUR RATINGS</h1>
            <div className='posterRatings'>
                {list}
            </div>
        </div>
    );
}

export default ShowMyRatings;