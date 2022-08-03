import PropTypes from "prop-types";
import css from "./Profile.module.css";

export const Profile = ( {username, tag, location, avatar, stats} ) =>
<div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p>{tag}</p>
    <p>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.stats__item}>
      <span>Followers </span><br/>
      <span className={css.name}>{stats.followers}</span>
    </li>
    <li className={css.stats__item}>
      <span>Views </span><br/>
      <span className={css.name}>{stats.views}</span>
    </li>
    <li className={css.stats__item}>
      <span>Likes </span><br/>
      <span className={css.name}>{stats.likes}</span>
    </li>
  </ul>
</div>;

Profile.propTypes = PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
        }) 
});