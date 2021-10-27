import PropTypes from 'prop-types';
import ce from './ContactElement.module.css';

const ContactsEl = ({ name, number, id, onDeleteContact }) => (
  <p className={ce.box}>
    <span>{name}:</span>
    <span>{number}</span>
    <button
      className={ce.btn}
      type="button"
      onClick={() => onDeleteContact(id)}
    >
      Remove
    </button>
  </p>
);
ContactsEl.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactsEl;
