import { useSpring, animated as a } from "react-spring";
import styles from './Spring.module.css';

const SpringIn = ({ children }) => {

    const animatedProps = useSpring({
        opacity : 1,
        marginLeft: 0,
        from: { marginLeft: -1900, opacity: 0},
        config: { mass: 1, tension: 2000, friction: 50, duration: 500},
    })
  return (
    <a.div className={styles.slideIn} style={{ ...animatedProps }}>
        {children}
    </a.div>
  )
}

export default SpringIn
