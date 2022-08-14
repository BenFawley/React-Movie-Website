import React, { useContext } from 'react';
import Header from '../Components/Header';
import styles from './Home.module.css';
import MovieList from '../Components/Movies/MovieList';
import Modal from '../Components/Modal';
import MovieContext from '../Context/movie-context';
import HomeBanner from '../Components/HomeBanner';
import { requests } from '../api/config';
import Footer from '../Components/Footer';


const Home = () => {

  const ctx = useContext(MovieContext);

  return (
    <>
      <Header searchValue={ctx.searchValue} setSearchValue={ctx.setSearchValue}/>
      <HomeBanner />
      {ctx.trailerState.showTrailer && <Modal src={ctx.videoURL} />}
      {!ctx.movies.length > 0 ? <div className={styles.movieListWrapper}>
        <MovieList fetchURL={requests.fetchTrending} onShowTrailer={ctx.handleShowTrailer} title="Trending Now"/> 
        <MovieList fetchURL={requests.fetchTopRated} onShowTrailer={ctx.handleShowTrailer} title="Top Rated"/> 
        <MovieList fetchURL={requests.fetchActionMovies} onShowTrailer={ctx.handleShowTrailer} title="Action Movies"/>
        <MovieList fetchURL={requests.fetchComedyMovies} onShowTrailer={ctx.handleShowTrailer} title="Comedy Movies"/>
        <MovieList fetchURL={requests.fetchFamilyMovies} onShowTrailer={ctx.handleShowTrailer} title="Family Movies"/>
        <MovieList fetchURL={requests.fetchHorrorMovies} onShowTrailer={ctx.handleShowTrailer} title="Horror Movies"/>
        <MovieList fetchURL={requests.fetchRomanceMovies} onShowTrailer={ctx.handleShowTrailer} title="Romantic Movies"/>
        <MovieList fetchURL={requests.fetchThrillerMovies} onShowTrailer={ctx.handleShowTrailer} title="Thriller Movies"/>
      </div> : <div className={styles.movieListWrapper}>
                <MovieList loadedMovies={ctx.movies} onShowTrailer={ctx.handleShowTrailer} title="Results"/> 
              </div>}
      <Footer />
    </>
  )
}

export default Home

