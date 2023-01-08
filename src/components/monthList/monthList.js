import css from './monthList.module.css';

const MonthList = () => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let currentMonth = [];
  months.forEach(month => {
    if (localStorage.getItem(month)) {
      currentMonth.push(JSON.parse(localStorage.getItem(month)));
    }
  });
  return (
    <div className={css.monthContainer}>
      <ul className={css.monthList}>
        {currentMonth.map((month, index) => {
          return (
            <li className={css.monthListUnit}>
              <h3>Month:{index + 1}</h3>
              {month.map(category => {
                return (
                  <span>
                    {category.name}:<p>{category.cush}</p>
                  </span>
                );
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MonthList;
