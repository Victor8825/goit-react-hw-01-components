import { PropTypes } from "prop-types";
import { StyledFriendList, StyledFriendListItem } from "./FriendList.styled";

export const FriendListItems = ( {friends} ) => {
  return (
    friends.map( friend => {
      return (
        <FriendListItem friend={friend} key={friend.id} />
      ) 
    })
)};

export const FriendListItem = ( {friend} ) => {
  return (
    <StyledFriendListItem isOnline={friend.isOnline}>
      <li>
        <span>{friend.isOnline}</span>
        <img src={friend.avatar} alt="User avatar" width="48" />
        <p>{friend.name}</p>
      </li>
    </StyledFriendListItem>
  )
}

export const FriendList = ({children}) =>
  <StyledFriendList >
    <ul>
      {children}
    </ul>
  </StyledFriendList>;

FriendList.propTypes = {
  children: PropTypes.object
};

FriendListItem.propTypes = {
    friend: PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number
    })
};
