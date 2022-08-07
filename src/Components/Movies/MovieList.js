import { useContext } from 'react';
import MovieContext from '../../Context/movie-context';
import MovieItem from './MovieItem';
import stlyes from './MovieList.module.css';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <FaArrowAltCircleLeft 
            onClick={() => scrollPrev()}
            className={stlyes.scrollBarArrow}
        />
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
          <FaArrowAltCircleRight 
              onClick={() => scrollNext()}
              className={stlyes.scrollBarArrow}
          />
    )
}



const MovieList = ({ loadedMovies }) => {  

  const ctx = useContext(MovieContext);

  const handleAddFavouriteMovie = (movie) =>{
    ctx.onAddFavourites(movie);
  }
 

  return (
      <div className={stlyes.scrollBar}>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
        {/* <ul className={stlyes.movieList}> */}
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
        {/* </ul> */}
        </ScrollMenu>
      </div>

  )
}

export default MovieList