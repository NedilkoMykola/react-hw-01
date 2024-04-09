import { Avatar, Card, Quantity, StatsItem, StatsList, UserInfo, UserName } from "./Profile.styled";



const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
    return (
      <Card>
  <UserInfo>
    <Avatar
      src={image}
      alt={name}
    />
    <UserName>{name}</UserName>
    <p>{tag}</p>
    <p>{location }</p>
  </UserInfo>

  <StatsList>
    <StatsItem>
      <span>Followers</span>
      <Quantity>{followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <span>Views</span>
      <Quantity>{views}</Quantity>
    </StatsItem>
    <StatsItem>
      <span>Likes</span>
      <Quantity>{likes}</Quantity>
    </StatsItem>
  </StatsList>
</Card>
  )  
}

export default Profile;