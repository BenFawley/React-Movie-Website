import React, { useContext, useEffect, useRef } from "react";
import styles from "./Home.module.css";
import MovieList from "../Components/Movies/MovieList";
import Modal from "../Components/Modal";
import MovieContext from "../Context/movie-context";
import HomeBanner from "../Components/HomeBanner";
import { requests } from "../api/config";
import Footer from "../Components/Footer";
import SpringIn from "../Spring/SpringIn";

const Home = () => {
  const ctx = useContext(MovieContext);

  const modalRef = useRef();

  useEffect(() => {
    ctx.onUpdateHomePage(true);
    if (ctx.videoURL) {
      modalRef.current.scrollIntoView({
        behaviour: "smooth",
        inline: "start",
        block: "start",
      });
    }
  }, [ctx.videoURL]);

  return (
    <>
      <HomeBanner innerRef={modalRef} />
      {ctx.videoURL && <Modal src={ctx.videoURL} />}
      {!ctx.movies.length > 0 ? (
        <div className={styles.movieListWrapper}>
          {ctx.startAnimation && (
            <SpringIn>
              <MovieList
                fetchURL={requests.fetchTrending}
                onShowTrailer={ctx.handleShowTrailer}
                title="Trending Now"
              />
            </SpringIn>
          )}
          {ctx.startAnimation && (
            <SpringIn>
              <MovieList
                fetchURL={requests.fetchTopRated}
                onShowTrailer={ctx.handleShowTrailer}
                title="Top Rated"
              />{" "}
            </SpringIn>
          )}
          {ctx.startAnimation && (
            <SpringIn>
              <MovieList
                fetchURL={requests.fetchActionMovies}
                onShowTrailer={ctx.handleShowTrailer}
                title="Action Movies"
              />
            </SpringIn>
          )}
          {ctx.startAnimation && (
            <SpringIn>
              <MovieList
                fetchURL={requests.fetchComedyMovies}
                onShowTrailer={ctx.handleShowTrailer}
                title="Comedy Movies"
              />
            </SpringIn>
          )}
          {ctx.startAnimation && (
            <SpringIn>
              <MovieList
                fetchURL={requests.fetchFamilyMovies}
                onShowTrailer={ctx.handleShowTrailer}
                title="Family Movies"
              />
            </SpringIn>
          )}
          {ctx.startAnimation && (
            <SpringIn>
              {" "}
              <MovieList
                fetchURL={requests.fetchHorrorMovies}
                onShowTrailer={ctx.handleShowTrailer}
                title="Horror Movies"
              />
            </SpringIn>
          )}
          {ctx.startAnimation && (
            <SpringIn>
              <MovieList
                fetchURL={requests.fetchRomanceMovies}
                onShowTrailer={ctx.handleShowTrailer}
                title="Romantic Movies"
              />
            </SpringIn>
          )}
          {ctx.startAnimation && (
            <SpringIn>
              {" "}
              <MovieList
                fetchURL={requests.fetchThrillerMovies}
                onShowTrailer={ctx.handleShowTrailer}
                title="Thriller Movies"
              />
            </SpringIn>
          )}
        </div>
      ) : (
        <div className={styles.movieListWrapper}>
          <MovieList
            loadedMovies={ctx.movies}
            onShowTrailer={ctx.handleShowTrailer}
            title="Results"
          />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Home;
