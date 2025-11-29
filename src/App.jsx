import userData from "./userData.json";
import Profile from "./components/Profile/Profile";
import friendsData from "./friends.json";
import FriendList from "./components/Friends/FriendList";
import RenderFriends from "./components/Friends/RenderFriends"; 


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
    </>
  );
};

export default App;
