import { useState } from "react";
import { uid } from "uid";
import UserForm from "./UserForm/UserForm";
import UserList from "./UserList/UserList";
import Modal from "./UI/Modal/Modal";

const App = () => {
  const [users, setUsers] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [modal, setModal] = useState({ title: "", message: "" });

  function addNewUser(newUser) {
    console.log(newUser);
    setUsers((prevState) => {
      return [...prevState, { ...newUser, key: uid() }];
    });
  }

  function errorHandler(title, message) {
    setModalActive(true);
    setModal({ title: title, message: message });
  }

  function disableModal() {
    setModalActive(false);
  }

  return (
    <div className="App">
      {modalActive && (
        <Modal
          title={modal.title}
          message={modal.message}
          onClick={disableModal}
          modalActive={modalActive}
        ></Modal>
      )}

      <UserForm onSubmit={addNewUser} onError={errorHandler} />
      {users.length > 0 && <UserList users={users} />}
    </div>
  );
};

export default App;
