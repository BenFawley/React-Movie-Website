import styles from './HomeBanner.module.css';

const HomeBanner = (props) => {
  return (
    <div className={styles.homebanner}>
        <div className={styles.bannerOverlay}>
          <div className={styles.bannerText}>
            <h1>Welcome to the Movie Website</h1>
          </div>
        </div>
      </div>
  )
}

export default HomeBanner