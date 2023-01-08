import css from './button.module.css';
import PropTypes from 'prop-types';
const Button = ({ name, setLocalStorage }) => {
  return (
    <button
      name="cush"
      type="button"
      className={css.button}
      onClick={() => setLocalStorage(name)}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  setLocalStorage: PropTypes.func.isRequired,
};
export default Button;
