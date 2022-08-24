import styles from './Header.module.css';
import { FaSearch } from 'react-icons/fa';
import { ReactComponent as Logo } from '../logo.svg';
import { useContext } from 'react';
import MovieContext from '../Context/movie-context';
import Favourites from './Movies/Favourites';
import FavouriteList from './Movies/FavouriteList';
import { Link } from 'react-router-dom';


const Header = (props) => {

  const ctx = useContext(MovieContext);

  const onChangeHandler = (e) => {
    if (e.target.value.length > 0){
      ctx.onSearchMovie(e.target.value);
    } else{
      const id = "";
      ctx.onClearSearch(id);
    }
  }


  return (
    <header className={styles.header}>
        <div className={styles.headerContent}>
            <div className={styles.logo}>
                <Link to={"/"}>
                  <Logo className={styles.logo}/>
                </Link>
            </div>
            <div className={styles.searchWrapper}>
                <input 
                  className={styles.search}
                  type="search" 
                  placeholder="Search Movies..." 
                  value={ctx.searchValue}
                  onChange={onChangeHandler}
                />
                <FaSearch color="#2f80ed" className={styles.searchIcon}/>
            </div>
            {ctx.favState.showFavIcon && <Favourites />}
            {ctx.favState.showFavMovies && <FavouriteList />}
        </div>
    </header>
  )
}

export default Header