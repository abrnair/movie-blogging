import axios from 'axios';
import React, { useEffect, useState  } from 'react';
import { useParams, Link} from 'react-router-dom';
import getURL from './axios';
import MovieRatingCard from './MovieRatingCard';

import "./Section.css";

function ShowRatingDetails() {
    const { id } = useParams();
    const [rating, setRating] = useState({
                                        movie: 'Movie',
                                        rating: 0,
                                        description: `Description`
                                    });
        
    useEffect(() => {
        axios.get(`http://localhost:3001/api/movies/${id}`)
        .then((response) => {
            setRating(response.data);
        });

    }, []);

    const deleteClick = () => {
        axios
          .delete(`http://localhost:3001/api/movies/${id}`)
    };

    return(
        <div>
            <h1 className="sectionTitle">{rating.movie}</h1>
            
            <div style={{ float: "left", paddingLeft: "10px"}}>
                <p style={{ float: "left", paddingLeft: "10px"}} >Below you will find your rating and description of the movie {rating.movie}</p>
                <MovieRatingCard movie={rating.movie} path={`${rating._id}`}/>
            </div>
            <div style={{ margin: "100px"}}>
                <h1>Rating: {rating.rating}</h1>
                <h1>Description: {rating.description}</h1>
            </div>
            <div style={{ margin: "100px"}}>
                <Link to={`/your_rating/${id}/editing`}>
                    <button style={{ margin: "10px", width: "100px"}} type="button">Edit</button>
                </Link>
                <Link to="/your_rating" >
                    <button style={{ margin: "10px", width: "100px"}} type="button" onClick={deleteClick}>Delete</button>
                </Link>
            </div>
        </div>
    );
}

export default ShowRatingDetails; 

