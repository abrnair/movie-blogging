import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router";

function EditRating() {
    const { id } = useParams();
    const [rating, setRating] = useState({
                                        movie: 'Movie',
                                        rating: 0,
                                        description: `Description`
                                    });
    const navigate = useNavigate();
        
    useEffect(() => {
        axios.get(`http://localhost:3001/api/movies/${id}`)
        .then((response) => {
            setRating(response.data);
        });

    }, []);

    function onChange(e) {
        return setRating((prev) => {
            return {...prev, ...e}
        })
    }

    async function onSubmit(e) {
        e.preventDefault();
        const data = {
            movie: rating.movie,
            rating: rating.rating,
            description: rating.description
        }

        axios.put(`http://localhost:3001/api/movies/${id}`, data)
        .then(res => {
            navigate(`/your_rating/${id}`);
        })

    }
    return (
        <div>
            <h1 className="sectionTitle">Updating: {rating.movie}</h1>
            <form onSubmit={onSubmit}>
                <div>
                <label htmlFor="movie">Movie</label>
                <input
                    type='text'
                    placeholder='Movie Name'
                    name='movie'
                    value={rating.movie}
                    onChange={(e) => onChange({movie: e.target.value})}
                    style={{margin: "0 0 0 10px"}}
                />
                </div>
                <br />
                <div>
                <label htmlFor="rating">Rating</label>
                <input
                    type='number'
                    placeholder='Rating'
                    name='rating'
                    value={rating.rating}
                    onChange={(e) => onChange({rating: e.target.value})}
                    style={{margin: "0 0 0 10px"}}
                />
                </div>
                <br />
                <div>
                <label htmlFor="description">Description</label>
                <input
                    type='text'
                    placeholder='Description'
                    name='description'
                    value={rating.description}
                    onChange={(e) => onChange({description: e.target.value})}
                    style={{margin: "0 0 0 10px"}}
                />
                </div>
                <br />
                <button type="submit">Update Rating</button>

            </form>
        </div>
    )
}

export default EditRating;