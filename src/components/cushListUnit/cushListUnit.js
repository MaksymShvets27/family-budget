import PropsTypes from 'prop-types';
const CushListUnit = ({ cushName }) => {
  return (
    <li>
      {cushName}: {JSON.parse(localStorage.getItem(cushName))}
    </li>
  );
};

CushListUnit.propsTypes = {
  cushName: PropsTypes.string.isRequired,
};
export default CushListUnit;
