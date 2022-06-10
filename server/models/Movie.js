const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    movie: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    },
    description: {
        type: String
    }
});

const Movie = mongoose.model("Movies", MovieSchema);
module.exports = Movie;