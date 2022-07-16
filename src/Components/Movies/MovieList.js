import MovieItem from './MovieItem';
import stlyes from './MovieList.module.css';


const MovieList = ({ loadedMovies, onShowTrailer }) => {  

  return (
        <ul className={stlyes.movieList}>
            {loadedMovies.map((movie)=>(
                movie.poster_path &&
                <MovieItem 
                  id={movie.id}
                  key={movie.id} 
                  imgPath={movie.poster_path}
                  rating={movie.vote_average.toFixed(1)}
                  onShowTrailer={onShowTrailer}
                />
                
            ))}
        </ul>
  )
}

export default MovieList