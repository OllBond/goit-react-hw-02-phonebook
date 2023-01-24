import { Component } from 'react';
// import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import css from './ContactForm/ContactForm.module.css';
export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  nameInputId = nanoid();
  numberInput = nanoid();
  filterInput = nanoid();

  // метод, який оновить state
  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  // функція створює новий контакт newContact
  // і повертає масив старих контактів і новий
  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    if (this.isDublicate({ name, number })) {
      return alert(`${name}: ${number} is already in contacts`);
    }
    // тут callback бо хочемо змінити масив у state
    this.setState(prevState => {
      const { name, number, contacts } = prevState;
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      // в об'єкт contacts записуємо новий контакт і всі попередні
      // обнуляю name і number, відбувається рендер
      // і у value inputa потрапляє пуста стока
      return { contacts: [newContact, ...contacts], name: '', number: '' };
    });
  };
  removeContact(id) {
    this.setState(({ contacts }) => {
      // фільтр книг, який дає масив newContact
      // який має сонтакти з id які не дорівнюють id, того, що ми видаляли
      const newContact = contacts.filter(contact => contact.id !== id);
      // в масив newContact потрапили контакти окрім того, який треба видалити
      return { contacts: newContact };
    });
  }
  isDublicate({ name, number }) {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();
    const { contacts } = this.state;
    // щоб знайти елемент в масиві
    // якщо знайщеться в contact буде об'єкт
    // якщо не здайде - undefind
    const result = contacts.find(({ name, number }) => {
      return (
        name.toLowerCase() === normalizedName &&
        number.toLowerCase() === normalizedNumber
      );
    });
    // на треба повернути або true або false
    // булеве значення об'єкта - true
    // булеве значення undefind - false
    return Boolean(result);
  }
  getFilteredContacts() {
    const { filter, contacts } = this.state;
    // якщо фільтр пустий - повертати масив контактів не фільтрувати
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        // якщо у name є ці кілька літер - вертає true
        name.toLowerCase().includes(normalizedFilter) ||
        // або якщо у number є ці кілька цифр - вертає true
        number.toLowerCase().includes(normalizedFilter)
      );
    });
    return result;
  }
  render() {
    const { handleSubmit, handleInputChange } = this;
    const { name, number } = this.state;
    const contacts = this.getFilteredContacts();
    // mapаємо відфільтровані книги
    const itemsContacts = contacts.map(({ id, name, number }) => {
      return (
        <li className={css.listItems} key={id}>
          {name}: {number}
          <button
            className={css.btnDeleteContact}
            // анонімна функція де передаємо id контакту, щоб знати,
            // який контакт видаляти
            onClick={() => this.removeContact(id)}
            type="button"
          >
            Delete
          </button>
        </li>
      );
    });
    return (
      <div>
        <h1>Phonebook</h1>
        <div className={css.wrapper}>
          <div className={css.contactFormBlock}>
            <form className="" onSubmit={handleSubmit}>
              <div className={css.conactFormGroup}>
                <label className="" htmlFor={this.nameInputId}>
                  Name
                </label>
                <input
                  className={css.input}
                  // зв'язок інпуту і state
                  value={name}
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  id={this.nameInputId}
                />
              </div>
              <div className={css.conactFormGroup}>
                <label className="" htmlFor={this.numberInputId}>
                  Number
                </label>
                <input
                  className={css.input}
                  // зв'язок інпуту і state
                  value={number}
                  onChange={handleInputChange}
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  id={this.numberInputId}
                />
              </div>
              <button className={css.btnAddContact} type="submit">
                Add contact
              </button>
            </form>
          </div>
          <div className="">
            <h2>Contacts</h2>
            <div className={css.conactFormGroup}>
              <label className="" htmlFor={this.filterInputId}>
                Find contacts by name
              </label>
              <input
                className={css.input}
                // зв'язок інпуту і state
                value={this.state.filter}
                onChange={handleInputChange}
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                id={this.filterInputId}
              />
            </div>
            <ul className={css.listContact}>{itemsContacts}</ul>
          </div>
        </div>
      </div>
    );
  }
}
