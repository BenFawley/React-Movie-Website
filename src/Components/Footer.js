import styles from './Footer.module.css';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube  } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.pageFooter}>
        <div className={styles.footerContent}>
            <div className={styles.socLinks}>
                <FaTwitter className={styles.socialIcon}/>
                <FaFacebook className={styles.socialIcon}/>
                <FaYoutube className={styles.socialIcon}/>
                <FaInstagram className={styles.socialIcon}/>
            </div>
            <div className={styles.footerLinks}>
                <p>Privacy Policy</p>
                <p>Cookies</p>
                <p>Terms of Use</p>
            </div>
            <div className={styles.copyright}>
                <p>&copy; TMDB 2022, All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer