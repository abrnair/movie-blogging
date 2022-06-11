const API_KEY = process.env.REACT_APP_API_KEY;

const requests= {
    getTrending: `trending/movie/week?api_key=${API_KEY}`,
    getTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    getNowPlaying: `movie/now_playing?api_key=${API_KEY}&language=en-US`,
    getPopular: `movie/popular?api_key=${API_KEY}&language=en-US`
}

export default requests;