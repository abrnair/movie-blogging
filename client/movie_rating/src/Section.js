import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getURL from './axios';
import "./Section.css";
import MovieCard from './MovieCard';


// Section component

function Section({ title, getReq }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getData() {
            const fullRequest = await getURL.get(getReq);
            setMovies(fullRequest.data.results)
            return fullRequest;
        }
        getData();
    }, [getReq]);

    let movieList;
    {
        movieList = movies.map((movie, k) =>
          <MovieCard movie={movie} path={`/`} key={k} />
        );
    }

    return (
        <div className='allSections'>
            <h1 className='sectionTitle'>{ title }</h1>
            <div className='section'>
                    {movieList}
            </div>
        </div>
    )
}

export default Section;
