import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Section.css";


class Rating extends Component {
    constructor() {
        super();
        this.state = {
            movie: '',
            rating: '',
            description: ''
        };
    }
    
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        const data = {
            movie: this.state.movie,
            rating: this.state.rating,
            description: this.state.description
        };

        axios.post('http://localhost:3001/api/movies', data)
        .then(res =>{
            console.log(res);
            console.log(res.data);
        })
        .catch(err => {
            console.log("Error in Rating");
        })
    };
     
    render() {
        return (
            <header>
                <br/>
                <form noValidate onSubmit={this.onSubmit}>
                    <div>
                    <input
                        type='text'
                        placeholder='Name of Movie'
                        name='movie'
                        value={this.state.movie}
                        onChange={this.onChange}
                    />
                    </div>

                    <div>
                    <input
                        type='number'
                        placeholder='Rating'
                        name='rating'
                        min="0"
                        max="10"
                        maxLength="2"
                        value={this.state.rating}
                        onChange={this.onChange}
                    />
                    </div>

                    <div>
                    <input
                        type='text'
                        placeholder='Description'
                        name='description'
                        value={this.state.description}
                        onChange={this.onChange}
                    />
                    </div>

                    
                    <input
                        type="submit"
                    />

              </form>
            </header>
        )
    }
}

export default Rating;