import styles from './MovieItem.module.css';
import { FaPlay, FaHeart } from 'react-icons/fa';
import { useContext } from 'react';
import MovieContext from '../../Context/movie-context';
import Button from '../Button';

const imageURL = "https://image.tmdb.org/t/p/w342";


const MovieItem = ({ id, imgPath, rating, title, addFavouriteMovie}) => {

  const ctx = useContext(MovieContext);

  const passMovieID = (e) => {
    ctx.onShowTrailer(e.target.id);
  }



  return (
    <li 
    className={styles.movieItem} 
    key={id} 
    id={id}
    >
        <div>
          <img src={imageURL + imgPath} alt="Movie Poster" />
          <span className={styles.rating} style={{color: rating < 5 ? "red" : rating > 5 & rating < 8 ? "yellow" :  "green" }}>{rating}</span>
        </div>
        <div className={styles.movieDetails}>
          <h3>{title}</h3>
          <div className={styles.detailsIcons}>
            <Button id={id} className={styles.trailerButton} type="button" text= "Trailer" icon={<FaPlay className={styles.playTrailer}/>} onClick={passMovieID}/>
            <Button id={id} className={styles.favourite} type="button" text={<FaHeart />} onClick={addFavouriteMovie}/>
          </div>
        </div>
    </li>
  )
}

export default MovieItem