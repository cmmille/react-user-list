import styles from "./Modal.module.css";


const Modal = (props) => {
  return (
    <div>
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
    </div>
  );
};
export default Modal;
