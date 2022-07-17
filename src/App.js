import React, { useContext } from 'react';
import Header from './Components/Header';
import './App.css';
import MovieList from './Components/Movies/MovieList';
import Modal from './Components/Modal';
import MovieContext from './Context/movie-context';


const App = () => {

  const ctx = useContext(MovieContext);

  return (
    <>
      <Header searchValue={ctx.searchValue} setSearchValue={ctx.setSearchValue}/>
      <div className="homebanner">
        
      </div>
      <div className="movieListWrapper">
       <MovieList loadedMovies={ctx.movies} onShowTrailer={ctx.handleShowTrailer}/>  
      </div>
      {ctx.trailerState.showTrailer && <Modal src={ctx.videoURL} />}
    </>
  )
}

export default App
