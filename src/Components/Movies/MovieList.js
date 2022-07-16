import MovieItem from './MovieItem';
import stlyes from './MovieList.module.css';


const MovieList = ({ loadedMovies }) => {
  

  return (
        <ul className={stlyes.movieList}>
            {loadedMovies.map((movie)=>(
                movie.poster_path &&
                <MovieItem 
                  key={movie.id} 
                  imgPath={movie.poster_path}
                  rating={movie.vote_average.toFixed(1)}
                />
            ))}
        </ul>
  )
}

export default MovieList