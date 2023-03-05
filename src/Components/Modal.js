import React, { useContext } from "react";
import ReactDOM from "react-dom";
import MovieContext from "../Context/movie-context";
import styles from "./Modal.module.css";

const Backdrop = () => {
  const ctx = useContext(MovieContext);

  return <div className={styles.backdrop} onClick={ctx.onCloseTrailer}></div>;
};

const ModalOverlay = ({ src, title }) => {
  return (
    <div className={styles.modal}>
      <iframe
        className={styles.trailerIframe}
        src={`https://www.youtube.com/embed/${src}`}
        title={title}
        allowFullScreen
      ></iframe>
    </div>
  );
};

const Modal = ({ src }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay src={src} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
