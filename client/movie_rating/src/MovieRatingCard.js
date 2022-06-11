import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getURL from './axios';
import MovieCard from './MovieCard';
import "./Section.css";
const API_KEY = process.env.REACT_APP_API_KEY;

const getSearch = `/search/movie?api_key=${API_KEY}&query=`

function MovieRatingCard (props) {
    const movieName = props.movie;
    const id = props.path
    const [movie, setMovie] = useState([]);
    

    useEffect(() => {
        async function getMovie() {
            const fullRequest = await getURL.get(getSearch+movieName)
            setMovie(fullRequest.data.results)
            return fullRequest
        }
        getMovie();
    }, [props, setMovie]);

    let movieList;
    {
        movieList = movie.map((m, k) =>
          <MovieCard movie={m} path={`/your_rating/${id}`} key={k} />
        );
        
    }

    movieList.length>1? movieList=movieList[0]: movieList = movieList[0]

    return (
        <div >
            {movieList}
        </div>
    )
}

export default MovieRatingCard;