import { Avatar, FriendCard, FriendName, Status } from "./FriendListItem.styled";


const FriendListItem = ({ avatar, name, status }) => {
   
    return (
    <FriendCard>
  <Avatar src={avatar} alt="Avatar"  />
  <FriendName>{name}</FriendName>
  <Status status={status} >{status? "Online": "Offline"}</Status>
</FriendCard>
    )
}

export default FriendListItem;