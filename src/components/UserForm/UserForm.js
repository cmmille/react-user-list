import { useState } from "react";

import Card from "../UI/Card/Card";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const blankForm = {
    username: "",
    age: "",
  };
  const [formInput, setFormInput] = useState(blankForm);

  function changeHandler(event) {
    const newValue = event.target.value;
    const target = event.target.name;

    setFormInput((prevState) => {
      return { ...prevState, [target]: newValue };
    });
  }

  function clickHandler() {
    // if (formInput.age.trim().length === 0 || formInput.username.trim().length === 0){
    //   console.log("Empty input");
    //   return
    // }
    // props.onSubmit(formInput);
    // setFormInput(blankForm);
    const errorMessage = `Please be sure to fill out all fields.`;
    if (formInput.username.trim().length === 0) {
      const errorTitle =`Invalid Username.`;
      props.onError(errorTitle, errorMessage);
    } else if (formInput.age.trim().length === 0) {
      const errorTitle =`Invalid Age.`;
      props.onError(errorTitle, errorMessage);
    } else {
      props.onSubmit(formInput);
      setFormInput(blankForm);
    }
  }

  return (
    <Card>
      <h2 className={styles["form-label"]}>Username:</h2>
      <input
        placeholder="Username"
        name="username"
        value={formInput.username}
        onChange={changeHandler}
        autoFocus
      ></input>

      <h2 className={styles["form-label"]}>Age (Years):</h2>
      <input
        placeholder="Age in years"
        name="age"
        value={formInput.age}
        onChange={changeHandler}
        type="number"
        step="1"
        min="1"
      ></input>

      <button onClick={clickHandler}>Add User</button>
    </Card>
  );
};

export default UserForm;
