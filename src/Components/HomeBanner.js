import styles from "./HomeBanner.module.css";
import movieBanner from "../Images/movie.jpg";

const HomeBanner = ({ innerRef }) => {
  return (
    <div className={styles.banner} ref={innerRef}>
      <img src={movieBanner} alt="Movie Banner" />
      <div className={styles.bannerText}>
        <span>Welcome to</span>
        <h1>
          Film <br />
          Frenzy
        </h1>
        <p>
          The all in one movie streaming platform where you can immerse yourself
          in the cinematic universe.
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;
