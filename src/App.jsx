import userData from "./userData.json";
import Profile from "./components/Profile/Profile";
import friendsData from "./friends.json";
import FriendList from "./components/FriendList/FriendList";
import RenderFriends from "./components/FriendList/FriendListItem"; 
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
