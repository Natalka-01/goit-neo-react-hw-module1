import RenderFriends from "./FriendListItem";
import styles from "./FriendList.module.css"

const FriendsList = ({ friends}) => {
    return (
        <ul className={styles.friendsList}>
            {friends.map((friend) => (
                <RenderFriends friend={friend} key ={friend.id} />
            ))}
        </ul>
    )
}

export default FriendsList