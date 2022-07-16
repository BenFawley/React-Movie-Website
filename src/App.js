import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import './App.css';
import MovieList from './Components/Movies/MovieList';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("thor");

  const getMovies = async (searchValue) => {
      const url = `https://api.themoviedb.org/3/search/movie${API_KEY}&query=${searchValue}`;

      const response =  await fetch (url)
      const responseJSON = await response.json();
     
      if (responseJSON.results){
        setMovies(responseJSON.results);
    }
    
  }

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);


  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="movieListWrapper">
       <MovieList  loadedMovies={movies}/>  
      </div>
    </>
  )
}

export default App
