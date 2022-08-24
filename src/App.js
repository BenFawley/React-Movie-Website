import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import MovieDetails from './Pages/MovieDetails';
import Header from './Components/Header.js';
import { useContext } from 'react';
import MovieContext from './Context/movie-context.js';
import Modal from './Components/Modal.js';


const App = () => {

  const ctx = useContext(MovieContext);

  return (
      <>
      <Header searchValue={ctx.searchValue} setSearchValue={ctx.setSearchValue}/>
      {ctx.trailerState.showTrailer && <Modal src={ctx.videoURL} />}
      <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/movie/:id/:imgPath/:rating/:title/:banner/:overview/:date" exact element={<MovieDetails />}/>
      </Routes>
      </>
  )
}

export default App