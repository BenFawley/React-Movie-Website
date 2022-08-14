import { useContext, useEffect, useState } from 'react';
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



const MovieList = ({ loadedMovies, title, fetchURL }) => {  
  const [homePageMovies, setHomePageMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(fetchURL)
      .then((res)=>res.json());
      setHomePageMovies(request.results);
      return request;
    } 
    fetchData()
  }, [fetchURL])

  const ctx = useContext(MovieContext);

  const handleAddFavouriteMovie = (movie) =>{
    ctx.onAddFavourites(movie);
  }
 

  return (
      <div className={stlyes.scrollBar}>
        <h2 className={stlyes.heading}>{title}</h2>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
            {loadedMovies ? loadedMovies.map((movie)=>(
              movie.poster_path &&
                <MovieItem 
                  id={movie.id}
                  key={movie.id} 
                  imgPath={movie.poster_path}
                  rating={movie.vote_average.toFixed(1)}
                  title={movie.original_title} 
                  banner={movie.backdrop_path}
                  overview={movie.overview}
                  addFavouriteMovie={()=>{handleAddFavouriteMovie(movie)}}
                />
            )) : homePageMovies.map((movie)=>(
              movie.poster_path &&
                <MovieItem 
                  id={movie.id}
                  key={movie.id} 
                  imgPath={movie.poster_path}
                  rating={movie.vote_average.toFixed(1)}
                  title={movie.original_title}
                  banner={movie.backdrop_path} 
                  overview={movie.overview}
                  addFavouriteMovie={()=>{handleAddFavouriteMovie(movie)}}
                />
          ))}
        </ScrollMenu>
      </div>

  )
}

export default MovieList