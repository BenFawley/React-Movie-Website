import styles from './MovieItem.module.css';

const imageURL = "https://image.tmdb.org/t/p/w342";


const MovieItem = ({ id, imgPath, rating, onShowTrailer }) => {

  const passMovieID = (e) => {
    const id = e.currentTarget.id;
    onShowTrailer(id);
  }

  return (
    <li 
    className={styles.movieItem} 
    key={id} 
    id={id} 
    onClick={passMovieID}>
        <img src={imageURL + imgPath} alt="Movie Poster" />
        <span className={styles.rating}>{rating}</span>
    </li>
  )
}

export default MovieItem