const express = require('express');
const router = express.Router();

// Load Movie Model
const Movie = require('../../models/Movie');

// path: /movies/:id
// desc: Get all movie rating

router.get('/', (req, res) => {
    Movie.find()
    .then(movie => res.json(movie))
    .catch(err => res.status(404).json({nomoviefound: 'No Movie found'}));
});

// path: api/movies/:id
// description: gets movie that matches the id
router.get('/:id', (req, res) => {
    Movie.findById(req.params.id, (err, result) => {
        if (err) {
            res.json(err);          // Displays the error
        }
        else {
            res.json(result);       // Displays the specific element
        }
    });
});


// path: api/movies
// desc: add rating
router.post('/', (req, res) => {
    Movie.create(req.body)
    .then(movie => res.json({ msg: 'Movie Rating Added' }))
    .catch(err => res.status(400).json({ error: 'Could not add rating' }));
});

// path: /movies/:id
// desc: Update Rating
router.put('/:id', (req, res) => {
    Movie.findByIdAndUpdate(req.params.id, req.body)
    .then(movie => res.json({ msg: 'Updated'}))
    .catch(err => res.status(400).json({ error: 'Unable to update' }))
})

// path: /movies/:id
// desc: Delete rating
router.delete('/:id', (req, res) => {
    Movie.findByIdAndRemove(req.params.id, req.body)
    .then(movie => res.json({ msg: 'Removed'}))
    .catch(err => res.status(404).json({ error: 'No such movie' }))
})

module.exports = router;