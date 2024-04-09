
import Profile from "./assets/components/Profile/Profile"
import userData from "./userData.json"
import friends from "./Friends.json"
import FriendList from "./assets/components/FriendList/FriendList"
import transactions from "./transactions.json"
import TransactionHistory from "./assets/components/TransactionHistory/TransactionHistory"


function App() {
  
const {username, tag, location, avatar, stats} = userData
  return (
    <>
       <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}

export default App
