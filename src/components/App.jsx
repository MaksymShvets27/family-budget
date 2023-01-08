import { useEffect } from 'react';
import { useState } from 'react';
import css from './App.module.css';
import ButtonsList from './buttonsList/buttonsList';
import CushList from './cushList/cushList';
import FormCheck from './fopmCheck/formCheck';
import MonthList from './monthList/monthList';
import SaveMonthButton from './saveMounth/saveMounth';

let buttonsList = ['Foods', 'Pets', 'Car', 'Cigarettes', 'Alcohol'];

export const App = () => {
  const [currentCush, setCurrentCash] = useState(0);
  const [currentDate, setCurrentDate] = useState(0);

  useEffect(() => {
    let date = new Date();
    setCurrentDate(date.getDate());
    console.log(date.getDate());
  }, []);

  const addCurrentCush = value => {
    setCurrentCash(Number(value));
  };

  const setLocalStorage = key => {
    if (localStorage.getItem(key)) {
      let oldLocalStorage = JSON.parse(localStorage.getItem(key));
      localStorage.setItem(key, JSON.stringify(currentCush + oldLocalStorage));
    } else {
      localStorage.setItem(key, JSON.stringify(currentCush));
    }
    window.location.reload();
  };
  return (
    <div className={css.container}>
      <FormCheck addCurrentCush={addCurrentCush} />
      <ButtonsList
        buttonsList={buttonsList}
        setLocalStorage={setLocalStorage}
      />
      <CushList cushesList={buttonsList} />
      {currentDate === (28 || 29 || 30 || 31) ? (
        <SaveMonthButton buttonsList={buttonsList} />
      ) : (
        <p className={css.monthMessege}>
          You can save budget at the end of the month
        </p>
      )}
      <MonthList />
    </div>
  );
};
