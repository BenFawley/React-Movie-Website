import { useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import { bannerURL } from '../api/config';

const MovieDetails = () => {

  const{ id, imgPath, rating, title, banner, overview } = useParams();

  console.log(imgPath);


  return (
    <div className={styles.bannerWrap}>
      <img src={bannerURL + banner} alt="Movie Banner"/>
      <div class={styles.bannerOverlay}>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default MovieDetails