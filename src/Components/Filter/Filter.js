import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Enter the contact's name. Search is not sensitive to input characters."
        required
        onChange={onChangeFilter}
        value={filter}
      ></input>
    </label>
  );
};

Filter.protoType = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
