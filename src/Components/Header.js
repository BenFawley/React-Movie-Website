import styles from './Header.module.css';
import { FaSearch } from 'react-icons/fa';
import { ReactComponent as Logo } from '../logo.svg';
import { useContext } from 'react';
import MovieContext from '../Context/movie-context';
import Favourites from './Favourites';


const Header = (props) => {

  const ctx = useContext(MovieContext);

  const onChangeHandler = (e) => {
    ctx.onSearchMovie(e.target.value);
  }

  return (
    <header className={styles.header}>
        <div className={styles.headerContent}>
            <div className={styles.logo}>
                <Logo className={styles.logo}/>
            </div>
            <div className={styles.searchWrapper}>
                <input 
                  className={styles.search}
                  type="search" 
                  placeholder="Search Movies..." 
                  value={props.searchValue}
                  onChange={onChangeHandler}
                />
                <FaSearch color="#2f80ed" className={styles.searchIcon}/>
            </div>
            {/* {ctx.favourites && <Favourites />} */}
            <Favourites />
        </div>
    </header>
  )
}

export default Header