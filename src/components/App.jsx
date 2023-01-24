import { Component } from 'react';
// import ContactForm from './ContactForm/ContactForm';
import css from './ContactForm/ContactForm.module.css';
import { nanoid } from 'nanoid';
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
    // тут callback бо хочемо змінити масив у state
    this.setState(prevState => {
      const { name, number, contacts } = prevState;
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      // в об'єкт contacts записуємо новий контакт і всі попередні
      return { contacts: [newContact, ...contacts] };
    });
  };
  render() {
    const { handleSubmit, handleInputChange } = this;
    const { contacts } = this.state;
    const itemsContacts = contacts.map(({ id, name, number }) => {
      return (
        <li className={css.listItems} key={id}>
          {name}: {number}
          <button className={css.btnDeleteContact} type="button">
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
                  value={this.state.name}
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
                  value={this.state.number}
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
