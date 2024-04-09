import FriendListItem from "../FriendListItem/FriendListItem";
import { FriendsList } from "./FriendList.styled";


const FriendList = ({friends}) => {
    
    return (
        <FriendsList>
            {friends.map(friend => {
                const { id, name, isOnline, avatar } = friend;
            return <li key={id}>
                <FriendListItem name={name} status={isOnline} avatar={avatar} />
	        </li>    
    
            }
 
    )}
	
</FriendsList>
    )
}

export default FriendList;