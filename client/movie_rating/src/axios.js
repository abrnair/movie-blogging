import axios from 'axios';

// Beginning of URL
const getURL = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

export default getURL;