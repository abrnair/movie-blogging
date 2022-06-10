const express = require('express');
const app = express();
const connectDB = require('./db');
var cors = require('cors');

// import routes
const movies = require('./routes/api/movies');

app.get('/', (req, res) => {
    res.send('Hello World');
})

// cors
app.use(cors({ origin: true, credentials: true }));

// INIT Middleware
app.use(express.json({ extended: false }));

// Use Routes
app.use('/api/movies', movies);


// Connecting DataBase
connectDB();

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Server is running on Port: ${port}`))