import { PropTypes } from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { StyledFriendList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <StyledFriendList>
      <ul>
        {friends.map(friend => (
          <FriendListItem friend={friend} key={friend.id} />
        ))}
      </ul>
    </StyledFriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
