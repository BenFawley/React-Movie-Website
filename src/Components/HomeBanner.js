import styles from './HomeBanner.module.css';
import { useContext } from 'react';
import MovieContext from '../Context/movie-context';
import SpringIn from '../Spring/SpringIn';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../Images/carousel1.jpg';
import image2 from '../Images/carousel2.jpg';
import image3 from '../Images/carousel3.jpg';
import image4 from '../Images/carousel4.jpg';
import image5 from '../Images/carousel5.jpg';
import Color from 'color-thief-react';



const HomeBanner = (props) => {

const ctx = useContext(MovieContext);

  return (
    <Carousel autoPlay infiniteLoop={true} showThumbs={false}>
      {/* <Color src={image1} crossOrigin="anonymous" format="rgbString">
          {({ data }) => {
            return ( */}
              <div className={styles.carouselItem}>
                <img className={styles.fadeIn} src={image1} alt="Carousel Movie Banner" style={{opacity: ctx.startAnimation ? 1 : 0}}/>
                <div className={styles.homebannerOverlay} style={{background: "000"}}></div>
                <div className={styles.homebannerText}>
                  <h1 className={styles.fadeIn} style={{opacity: ctx.startAnimation ? 1 : 0}}>Thor: Love and Thunder (2022)</h1>
                </div>
              </div>
            {/* );
          }} */}
      {/* </Color> */}
      {/* <Color src={image2} crossOrigin="anonymous" format="rgbString">
          {({ data }) => {
            return ( */}
              <div className={styles.carouselItem}>
                <img src={image2} alt="Carousel Movie Banner" />
                <div className={styles.homebannerOverlay} style={{background: "000"}}></div>
                <div className={styles.homebannerText}>
                  <h1>The Lord of the Rings: The Rings of Power (2022)</h1>
                </div>
              </div>
            {/* );
          }}
      </Color> */}
      {/* <Color src={image3} crossOrigin="anonymous" format="rgbString">
          {({ data }) => {
            return ( */}
              <div className={styles.carouselItem}>
                <img src={image3} alt="Carousel Movie Banner" />
                <div className={styles.homebannerOverlay} style={{background: "000"}}></div>
                <div className={styles.homebannerText}>
                  <h1>Top Gun: Maverick (2022)</h1>
                </div>
              </div>
            {/* );
          }}
      </Color> */}
      {/* <Color src={image4} crossOrigin="anonymous" format="rgbString">
          {({ data }) => {
            return ( */}
              <div className={styles.carouselItem}>
                <img src={image4} alt="Carousel Movie Banner" />
                <div className={styles.homebannerOverlay} style={{background: "000"}}></div>
                <div className={styles.homebannerText}>
                  <h1>House of the Dragon (2022)</h1>
                </div>
              </div>
            {/* );
          }}
      </Color> */}
      {/* <Color src={image5} crossOrigin="anonymous" format="rgbString">
          {({ data }) => {
            return ( */}
              <div className={styles.carouselItem}>
                <img src={image5} alt="Carousel Movie Banner" />
                <div className={styles.homebannerOverlay} style={{background: "000"}}></div>
                <div className={styles.homebannerText}>
                  <h1>Beast (2022)</h1>
                </div>
              </div>
            {/* );
          }}
      </Color> */}
    </Carousel>
  )
}

export default HomeBanner