import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = (props) => {
  return(
    <div className={styles.backdrop} onClick={props.onCloseTrailer}></div>
  )
}

const ModalOverlay = (props) => {

  console.log(props.src)
  return (
      <div className={styles.modal}>
        <iframe className={styles.trailerIframe} src={`https://www.youtube.com/embed/${props.src}`} title={props.title} allowFullScreen>

        </iframe>
      </div>
  )
}

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseTrailer={props.onCloseTrailer} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay src={props.src} />,
        document.getElementById("overlay-root")
      )}
    </>
  )
}

export default Modal