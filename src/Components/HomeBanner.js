import styles from './HomeBanner.module.css';
import { useContext } from 'react';
import MovieContext from '../Context/movie-context';
import SpringIn from '../Spring/SpringIn';



const HomeBanner = (props) => {

  const ctx = useContext(MovieContext);

  return (
      <div className={styles.homebanner}>
          <div className={styles.bannerOverlay}>
            {ctx.startAnimation && 
            <SpringIn>
              <div className={styles.bannerText}>
                <h1>Welcome to the <br></br>Movie Website</h1>
              </div>
            </SpringIn>} 
          </div>
      </div>
  )
}

export default HomeBanner