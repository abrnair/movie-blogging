import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Section from './Section';
import requests from './requests';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import ShowMyRatings from './ShowMyRatings';
import ShowRatingDetails from './ShowRatingDetails';
import Poster from './Poster';
import EditRating from './EditRating';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
        <br></br>
        <ul>
          <li>
            <Link to="/" >
                <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/rate" >
              <p>Rate a Movie</p>
            </Link>
          </li>
          <li >
            <Link to="/your_rating" >
              <p>Your Ratings</p>
            </Link>
          </li>
        </ul>
        <div className='heading'>
          <h1 className='appName'>BlogFlix</h1>
        </div>
          {/* <Rate/>
          <div>
            <Link to="/your_rating" >
              <button className='toRatingButton'>Your Ratings</button>
            </Link>
          </div> */}
        </header>
        <div>
          <Routes>
            <Route path='/' element={<><Poster/>
                                       <Section title="Trending" getReq={requests.getTrending} />
                                       <Section title="Now Playing" getReq={requests.getNowPlaying}/>
                                       <Section title="Top Rated" getReq={requests.getTopRated}/> </>} />
            <Route path='/rate' element={<Rating/>}/>
            <Route path='/your_rating' element={<ShowMyRatings/>}/>
            <Route path='/your_rating/:id' element={<ShowRatingDetails/>} />
            <Route path='/your_rating/:id/editing' element={<EditRating/>} />
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;


