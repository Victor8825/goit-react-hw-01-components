import PropTypes from "prop-types";
import {BsPercent} from "react-icons/bs";
import {StyledStatistic, StyledStatisticEl} from "./Statictics.styled";

export const Statistics = ({title, stats}) => {
    return (
    <StyledStatistic >
      {title && (<h2>{title}</h2>)}
      <ul>
        {stats.map( statsEl => (
        <StyledStatisticEl  key={statsEl.id}>
          <li>
            <span>{statsEl.label}</span>
            <br/>
            <span>{statsEl.percentage}</span>
            <BsPercent size={14}/>
          </li>
        </StyledStatisticEl>
        ))}
      </ul>
    </StyledStatistic>)};


Statistics.propTypes = ({
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
  })).isRequired
});