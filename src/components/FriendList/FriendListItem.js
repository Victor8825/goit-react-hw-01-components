import { PropTypes } from 'prop-types';
import { StyledFriendListItem } from './FriendListItem.styled';

export const FriendListItem = ({ friend }) => {
  const { isOnline, avatar, name } = friend;
  return (
    <StyledFriendListItem isOnline={isOnline}>
      <li>
        <span>{isOnline}</span>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
      </li>
    </StyledFriendListItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }),
};
