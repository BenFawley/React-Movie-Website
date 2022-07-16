import styles from './MovieItem.module.css';

const imageURL = "https://image.tmdb.org/t/p/w342"


const MovieItem = ({ id, imgPath, rating }) => {

  return (
    <li className={styles.movieItem} key={id}>
        <img src={imageURL + imgPath} alt="Movie Poster" />
        <span className={styles.rating}>{rating}</span>
    </li>
  )
}

export default MovieItem