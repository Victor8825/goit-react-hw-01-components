import PropTypes from 'prop-types';
import { BsPercent } from 'react-icons/bs';
import { StyledStatistic, StyledStatisticEl } from './Statictics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StyledStatistic>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(statsEl => {
          const { id, label, percentage } = statsEl;
          return (
            <StyledStatisticEl key={id}>
              <li>
                <span>{label}</span>
                <br />
                <span>{percentage}</span>
                <BsPercent size={14} />
              </li>
            </StyledStatisticEl>
          );
        })}
      </ul>
    </StyledStatistic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
