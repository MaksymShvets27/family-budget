import Button from 'components/button/button';
import PropTypes from 'prop-types';
import css from './buttonsList.module.css';
const ButtonsList = ({ buttonsList, setLocalStorage }) => {
  return (
    <div className={css.buttonsList}>
      {buttonsList.map(button => {
        return (
          <Button name={button} setLocalStorage={setLocalStorage}></Button>
        );
      })}
    </div>
  );
};

ButtonsList.propTypes = {
  buttonsList: PropTypes.array.isRequired,
  setLocalStorage: PropTypes.func.isRequired,
};
export default ButtonsList;
