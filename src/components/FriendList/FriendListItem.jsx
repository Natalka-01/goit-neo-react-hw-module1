import styles from "./FriendList.module.css"
import clsx from 'clsx'

const RenderFriends = ({ friend }) => {
  const { name, avatar, isOnline } = friend;
  const statusClassName = isOnline ? styles.online : styles.offline;
  const statusText = isOnline ? "Online" : "Offline";

  return (
    <li className={styles.friendItem}> 
      <img className= {styles.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p className={clsx(styles.statusText, statusClassName)}>{statusText}</p>
    </li>
  );
};

export default RenderFriends;
