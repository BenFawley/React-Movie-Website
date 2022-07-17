import { FaHeart } from 'react-icons/fa';
import styles from './Favourites.module.css';
import { useContext } from 'react';
import MovieContext from '../Context/movie-context';

const Favourites = () => {

    const ctx = useContext(MovieContext);

  return (
    <div className={styles.myFavourites}>
        <FaHeart />
        <span>{ctx.favState.length}</span>
    </div>
  )
}

export default Favourites