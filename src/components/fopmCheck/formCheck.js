import css from './formCheck.module.css';
import PropTypes from 'prop-types';
const FormCheck = ({ addCurrentCush }) => {
  return (
    <div className={css.form}>
      <label className={css.inputsList}>
        <h3>Cush (use format like 123.43)</h3>
        <input
          className={css.cushInput}
          onChange={event => addCurrentCush(event.target.value)}
        ></input>
      </label>
    </div>
  );
};

FormCheck.propTypes = {
  addCurrentCush: PropTypes.func.isRequired,
};
export default FormCheck;
