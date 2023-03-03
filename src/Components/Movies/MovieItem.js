import styles from "./MovieItem.module.css";
import { FaPlay, FaHeart } from "react-icons/fa";
import { useContext } from "react";
import MovieContext from "../../Context/movie-context";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { imageURL } from "../../api/config";

const MovieItem = ({
  id,
  imgPath,
  rating,
  title,
  addFavouriteMovie,
  banner,
  overview,
  date,
}) => {
  let navigate = useNavigate();

  const ctx = useContext(MovieContext);

  const passMovieID = (e) => {
    ctx.onShowTrailer(e.target.id);
  };

  return (
    <li className={styles.movieItem} key={id} id={id} title="View Movie">
      <img
        src={imageURL + imgPath}
        alt="Movie Poster"
        onClick={() => {
          navigate(
            `/movie/${id}${imgPath}/${rating}/${title}${banner}/${overview}/${date}`
          );
        }}
      />
      <span
        className={styles.rating}
        style={{
          color:
            rating < 5
              ? "red"
              : (rating > 5) & (rating < 8)
              ? "#d2d531"
              : "#32CD32",
        }}
      >
        {rating}
      </span>
      <div className={styles.movieDetails}>
        <Button
          id={id}
          className={styles.trailerButton}
          type="button"
          text="Trailer"
          icon={<FaPlay className={styles.playTrailer} />}
          onClick={passMovieID}
        />
        <Button
          id={id}
          className={styles.favourite}
          type="button"
          text={<FaHeart />}
          onClick={addFavouriteMovie}
        />
      </div>
    </li>
  );
};

export default MovieItem;
