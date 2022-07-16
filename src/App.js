import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import './App.css';
import MovieList from './Components/Movies/MovieList';
import Modal from './Components/Modal';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("thor");
  const [videoURL, setVideoURL] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);


  const getMovies = async (searchValue) => {
      const url = `https://api.themoviedb.org/3/search/movie${API_KEY}&query=${searchValue}`;

      const response =  await fetch(url);
      const responseJSON = await response.json();
     
      if (responseJSON.results){
        setMovies(responseJSON.results);
    }
    
  }

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  const getTrailer = async (videoURL) => {
    const trailerURL = `https://api.themoviedb.org/3/movie/${videoURL}/videos${API_KEY}`;

    const response = await fetch(trailerURL);
    const responseJSON = await response.json();

    if(responseJSON.results){
        const found = responseJSON.results.find((movie)=>{
          if(movie.type.toLowerCase() === "trailer"){
            setVideoURL(movie.key);
          }
          
      })
    }

  }

  useEffect(() => {
    getTrailer(videoURL);
  }, [showTrailer]);

  const handleShowTrailer = (id) => {
    setVideoURL(id);
    setShowTrailer(true);
  }
  const handleCloseTrailer = () => {
    setVideoURL("");
    setShowTrailer(false);
  }

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="homebanner">
        
      </div>
      <div className="movieListWrapper">
       <MovieList loadedMovies={movies} onShowTrailer={handleShowTrailer}/>  
      </div>
      {videoURL !== "" && <Modal src={videoURL} onCloseTrailer={handleCloseTrailer}/>}
    </>
  )
}

export default App
