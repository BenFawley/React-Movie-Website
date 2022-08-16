import { useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import { bannerURL, imageURL } from '../api/config';
import { useContext, useEffect } from 'react';
import Color from 'color-thief-react';
import { FaPlay, FaHeart } from 'react-icons/fa';
import Button from '../Components/Button';
import MovieContext from '../Context/movie-context';
import Header from '../Components/Header';
import Modal from '../Components/Modal';



const MovieDetails = () => {

  const{ id, imgPath, rating, title, banner, overview, date } = useParams();

  const ctx = useContext(MovieContext);

  // ADD useEffect Hook to load related Movies & actors & maybe movie genres to add to banner

  // const addFavouriteMovie = (movie) => {
  //   ctx.onAddFavourites(movie);
  // }

  const passMovieID = (e) => {
    ctx.onShowTrailer(e.target.id);
  }

  console.log(id);

  return (
    <>
      <Header searchValue={ctx.searchValue} setSearchValue={ctx.setSearchValue}/>
      {ctx.trailerState.showTrailer && <Modal src={ctx.videoURL} />}
      <Color src={bannerURL + banner} crossOrigin="anonymous" format="rgbString">
          {({ data }) => {
            return (
              <div className={styles.bannerWrap}>
                <img className={styles.bannerImage} src={bannerURL + banner} alt="Movie Banner"/>
                <div className={styles.bannerOverlay} style={{background: data}}>
                  <div className={styles.bannerPoster}>
                    <img className={styles.posterImage} src={`${imageURL}/${imgPath}`} />
                  </div>
                  <div className={styles.bannerContent}>
                    <div>
                      <h1>{title + ` (${date.substring(0,4)})`}</h1>
                      <div className={styles.bannerButtons}>
                        <div style={{color: rating < 5 ? "red" : rating > 5 & rating < 8 ? "#d2d531" :  "#32CD32" }} className={styles.rating}>
                          <h3>{rating}</h3>
                        </div>
                        <Button id={id} className={styles.trailerButton} type="button" text= "Play Trailer" icon={<FaPlay className={styles.playTrailer}/>} onClick={passMovieID}/>
                        <Button id={id} className={styles.favourite} type="button" text="Add to Favourites" icon={<FaHeart className={styles.addToFav}/>} />
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
    </>
    
  )
}

export default MovieDetails