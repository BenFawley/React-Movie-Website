import styles from './Header.module.css';
import { FaSearch } from 'react-icons/fa';


const Header = (props) => {
  return (
    <header className={styles.header}>
        <div className={styles.headerContent}>
            <div className={styles.logo}>
                Logo
            </div>
            <div className={styles.searchWrapper}>
                <input 
                className={styles.search}
                type="search" 
                placeholder="Search Movies..." 
                value={props.searchValue}
                onChange={(e)=>(
                  props.setSearchValue(e.target.value)
                )}
                />
                <FaSearch color="#2f80ed" className={styles.searchIcon}/>
            </div>
        </div>
    </header>
  )
}

export default Header