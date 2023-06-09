import PropTypes from 'prop-types';
import css from './Section.module.css';

function Section({ children, title }) {
  return (
    <section>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
