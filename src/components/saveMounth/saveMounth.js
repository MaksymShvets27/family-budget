import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './saveMounth.module.css';

const SaveMonthButton = ({ buttonsList }) => {
  const [newMonth, setNewMonth] = useState([]);
  function saveMonth() {
    buttonsList.forEach(name => {
      let category = {
        name: name,
        cush: JSON.parse(localStorage.getItem(name)),
      };
      console.log(name);
      setNewMonth(newMonth.push(category));
    });
    let date = new Date();
    localStorage.setItem(date.getMonth() + 1, JSON.stringify(newMonth));
    window.location.reload();
  }
  return (
    <button
      className={css.saveButton}
      type="button"
      onClick={() => saveMonth()}
    >
      + new mounth
    </button>
  );
};

SaveMonthButton.propTypes = {
  buttonsList: PropTypes.array.isRequired,
};
export default SaveMonthButton;
