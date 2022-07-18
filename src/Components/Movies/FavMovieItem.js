import styles from './FavMovieItem.module.css';

const FavMovieItem = ({ title, imgSrc, id, onRemoveMovie }) => {


  return (
    <div className={styles.favContent} id={id} key={id}>
        <img src={imgSrc} alt="Movie Poster" />
        <p>{title}</p>
        <p id={id} className={styles.removeMovie} onClick={(e)=>{onRemoveMovie(e.target.id)}}>X</p>
    </div>
  )
}

export default FavMovieItem