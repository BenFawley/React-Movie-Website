import { useContext } from 'react';
import MovieContext from '../../Context/movie-context';
import MovieItem from './MovieItem';
import stlyes from './MovieList.module.css';


const MovieList = ({ loadedMovies }) => {  

  const ctx = useContext(MovieContext);

  const handleAddFavouriteMovie = (movie) =>{
    ctx.onAddFavourites(movie);
  }
 

  return (
        <ul className={stlyes.movieList}>
            {loadedMovies.map((movie)=>(
                movie.poster_path &&
                <MovieItem 
                  id={movie.id}
                  key={movie.id} 
                  imgPath={movie.poster_path}
                  rating={movie.vote_average.toFixed(1)}
                  title={movie.original_title} 
                  addFavouriteMovie={()=>{handleAddFavouriteMovie(movie)}}
                />
                
            ))}
        </ul>
  )
}

export default MovieList