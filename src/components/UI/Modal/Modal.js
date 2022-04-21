import styles from "./Modal.module.css";
import React from "react";


const Modal = (props) => {
  return (
    <React.Fragment>
      <div
        className={props.modalActive ? `${styles.backdrop}` : ""} 
        onClick={props.onClick}
      ></div>
      <div className={styles.modal}>
        <div className={styles.header}>
          <p>{props.title}</p>
        </div>
        <div className={styles.content}>
          <p>{props.message}</p>
          <button onClick={props.onClick}>Okay</button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Modal;
