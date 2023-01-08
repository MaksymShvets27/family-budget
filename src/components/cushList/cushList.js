// import css from './cushList.module.css';
import CushListUnit from 'components/cushListUnit/cushListUnit';
import PropTypes from 'prop-types';
import css from './cushList.module.css';
const CushList = ({ cushesList }) => {
  return (
    <div className={css.cushContainer}>
      <ul className={css.cushList}>
        {cushesList.map(cush => {
          return <CushListUnit cushName={cush} />;
        })}
      </ul>
    </div>
  );
};

CushList.propTypes = {
  cushesList: PropTypes.array.isRequired,
};
export default CushList;
