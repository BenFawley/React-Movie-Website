import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import MovieDetails from './Pages/MovieDetails';


const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/movie/:id/:imgPath/:rating/:title/:banner/:overview/:date" exact element={<MovieDetails />}/>
      </Routes>
  )
}

export default App