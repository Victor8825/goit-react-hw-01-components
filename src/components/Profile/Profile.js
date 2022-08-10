import PropTypes from 'prop-types';
import { StyledProfile } from './Profile.styled';

export const Profile = ({ user }) => {
  const {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = user;
  return (
    <StyledProfile>
      <div>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <span>Followers </span>
          <br />
          <span>{followers}</span>
        </li>
        <li>
          <span>Views </span>
          <br />
          <span>{views}</span>
        </li>
        <li>
          <span>Likes </span>
          <br />
          <span>{likes}</span>
        </li>
      </ul>
    </StyledProfile>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.exact({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
