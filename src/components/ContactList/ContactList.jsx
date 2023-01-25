import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, removeContact }) => {
  // mapаємо відфільтровані книги
  const itemsContacts = contacts.map(({ id, name, number }) => (
    <li className={css.listItems} key={id}>
      {name}: {number}
      <button
        className={css.btnDeleteContact}
        // анонімна функція де передаємо id контакту, щоб знати,
        // який контакт видаляти
        onClick={() => removeContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
  return <ul className={css.listContact}>{itemsContacts}</ul>;
};
export default ContactList;

// якщо є пустий масив - писати завжди  defaultProps
ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};
