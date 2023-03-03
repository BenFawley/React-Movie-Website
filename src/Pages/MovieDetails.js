import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import { API_KEY, bannerURL, BASE_URL, imageURL } from "../api/config";
import { useContext, useEffect, useState } from "react";
import Color from "color-thief-react";
import { FaPlay, FaHeart } from "react-icons/fa";
import Button from "../Components/Button";
import MovieContext from "../Context/movie-context";
import Header from "../Components/Header";
import Modal from "../Components/Modal";
import MovieList from "../Components/Movies/MovieList";
import Footer from "../Components/Footer";

const MovieDetails = () => {
  const [relatedMovies, setRelatedMovies] = useState([]);

  const { id, imgPath, rating, title, banner, overview, date } = useParams();

  const ctx = useContext(MovieContext);

  useEffect(() => {
    fetchRelatedMovies(id);
    ctx.onUpdateHomePage(false);
  }, [id]);

  const fetchRelatedMovies = async (id) => {
    const request = await fetch(
      `${BASE_URL}/movie/${id}/similar${API_KEY}`
    ).then((res) => res.json());
    setRelatedMovies(request.results);
    return request;
  };

  const addFavouriteMovie = () => {
    const movie = {
      id: parseInt(id),
      original_title: title,
      poster_path: "/" + imgPath,
    };
    ctx.onAddFavourites(movie);
  };

  const passMovieID = (e) => {
    ctx.onShowTrailer(e.target.id);
  };

  return (
    <>
      <Color
        src={bannerURL + banner}
        crossOrigin="anonymous"
        format="rgbString"
      >
        {({ data }) => {
          return (
            <div className={styles.bannerWrap}>
              <img
                className={styles.bannerImage}
                src={bannerURL + banner}
                alt="Movie Banner"
              />
              <div
                className={styles.bannerOverlay}
                style={{ background: data }}
              >
                <div className={styles.bannerPoster}>
                  <img
                    className={styles.posterImage}
                    src={`${imageURL}/${imgPath}`}
                    alt="Movie Poster"
                  />
                </div>
                <div className={styles.bannerContent}>
                  <div>
                    <h1>{title + ` (${date.substring(0, 4)})`}</h1>
                    <div className={styles.bannerButtons}>
                      <div
                        style={{
                          color:
                            rating < 5
                              ? "red"
                              : (rating > 5) & (rating < 8)
                              ? "#d2d531"
                              : "#32CD32",
                        }}
                        className={styles.rating}
                      >
                        <h3>{rating}</h3>
                      </div>
                      <Button
                        id={id}
                        className={styles.trailerButton}
                        type="button"
                        text="Play Trailer"
                        icon={<FaPlay className={styles.playTrailer} />}
                        onClick={passMovieID}
                      />
                      <Button
                        id={id}
                        className={styles.favourite}
                        type="button"
                        text="Add to Favourites"
                        icon={<FaHeart className={styles.addToFav} />}
                        onClick={addFavouriteMovie}
                      />
                    </div>
                    <div className={styles.movieText}>
                      <h3>Overview</h3>
                      <p>{overview}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Color>
      <div className={styles.movieListWrapper}>
        {!ctx.movies.length > 0 ? (
          <MovieList
            loadedMovies={relatedMovies}
            onShowTrailer={ctx.handleShowTrailer}
            title="Related Movies"
          />
        ) : (
          <MovieList
            loadedMovies={ctx.movies}
            onShowTrailer={ctx.handleShowTrailer}
            title="Results"
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default MovieDetails;
