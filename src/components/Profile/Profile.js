import PropTypes from "prop-types";
import { StyledProfile } from "./Profile.styled";

export const Profile = ( {avatar, username, tag, location, stats}) =>
<StyledProfile>
  <div>
    <img
      src={avatar}
      alt="User avatar"
    />
    <p>{username}</p>
    <p>{tag}</p>
    <p>{location}</p>
  </div>
  <ul>
    <li>
      <span>Followers </span><br/>
      <span>{stats.followers}</span>
    </li>
    <li>
      <span>Views </span><br/>
      <span>{stats.views}</span>
    </li>
    <li>
      <span>Likes </span><br/>
      <span>{stats.likes}</span>
    </li>
  </ul>
</StyledProfile>;

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
        }).isRequired
};
