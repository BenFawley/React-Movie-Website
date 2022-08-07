import { useContext } from 'react';
import MovieContext from '../../Context/movie-context';
import styles from './FavouriteList.module.css';
import FavMovieItem from './FavMovieItem';

const imgURL = "https://image.tmdb.org/t/p/w45";

const FavouriteList = () => {

    const ctx = useContext(MovieContext);

    const handleCloseFavList = () => {
        ctx.onCloseFavList();
    }

    const handleRemoveMovie = (id) => {
        console.log(id);
        ctx.onRemoveFavMovie(id);

    }

  return (
    <div className={styles.favMovieList}>
        <div className={styles.favHeader}>
            <h3>Favourites</h3>
            <p onClick={handleCloseFavList}>X</p>
        </div>
        {ctx.favState.showFavMovies && ctx.favState.favMovies.map((movie)=>{
           return <FavMovieItem 
                key={movie.id}
                id={movie.id}
                imgSrc={imgURL + movie.poster}
                title={movie.title}
                onRemoveMovie={handleRemoveMovie}
            />
            })
       } 
    </div>
  )
}

export default FavouriteList
