import { FaHeart } from 'react-icons/fa';
import styles from './Favourites.module.css';
import { useContext } from 'react';
import MovieContext from '../../Context/movie-context';

const Favourites = () => {

    const ctx = useContext(MovieContext);

    const showFavourites = () => {
      ctx.onShowFavourites();
    }

  return (
    <div className={styles.myFavourites} onClick={showFavourites}>
        <FaHeart />
        <span>{ctx.favState.favMovies.length}</span>
    </div>
  )
}

export default Favourites