import "./UserList.module.css"
import styles from "./UserList.module.css"

import UserRow from "./UserRow/UserRow"
import Card from "../UI/Card/Card"
const UserList = (props) => {
    return <Card>
        <div className={styles['label-row']}>
        <p>Username</p>
        <p>Age</p>
        </div>
        {props.users.map(user => {
            return <UserRow user = {user} key = {user.key}/>
        })}
    </Card>
}

export default UserList