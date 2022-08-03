import PropTypes from "prop-types";
import css from "./Statistics.module.css"

export const Statistics = (title, {stats}) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statistics__list}>
        {stats.map( statsEl => (
          <li key={statsEl.id} className={css.item}>
            <span className={css.label}>{statsEl.label}</span>
            <span className={css.percentage}>{statsEl.percentage}</span>
          </li>))}
      </ul>
    </section>
  ) 
}

Statistics.propTypes = PropTypes.exact ({
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired
});