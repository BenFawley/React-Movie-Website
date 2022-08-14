export const BASE_URL = `https://api.themoviedb.org/3`;
export const imageURL = "https://image.tmdb.org/t/p/w342";
export const bannerURL = "https://image.tmdb.org/t/p/w1280/";
export const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

export const requests = {
    fetchTrending: `${BASE_URL}/trending/all/week${API_KEY}&language=en`,
    fetchTopRated: `${BASE_URL}/movie/top_rated${API_KEY}&language=en`,
    fetchActionMovies: `${BASE_URL}/discover/movie${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie${API_KEY}&with_genres=35`,
    fetchFamilyMovies: `${BASE_URL}/discover/movie${API_KEY}&with_genres=10751`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie${API_KEY}&with_genres=99`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie${API_KEY}&with_genres=10749`,
    fetchThrillerMovies: `${BASE_URL}/discover/movie${API_KEY}&with_genres=27`,
}
