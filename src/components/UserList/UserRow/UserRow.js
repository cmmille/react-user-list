import styles from "./UserRow.module.css"

const UserRow = (props) => {
  return <div className={styles.row}>
      <p>{props.user.username}</p>
      <p>{props.user.age} years</p>
  </div>;
};

export default UserRow;
