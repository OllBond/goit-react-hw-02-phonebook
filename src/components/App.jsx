import { Component } from 'react';
// import ContactForm from './ContactForm/ContactForm';
import css from './ContactForm/ContactForm.module.css';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  nameInputId = nanoid();
  // метод, який оновить state
  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <div className={css.wrapper}>
          <div className={css.contactFormBlock}>
            <form className="" onSubmit={this.handleSubmit}>
              <div className={css.conactFormGroup}>
                <label className="" htmlFor={this.nameInputId}>
                  Name
                </label>
                <input
                  className={css.input}
                  // зв'язок інпуту і state
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  id={this.nameInputId}
                />
              </div>
              <div className={css.conactFormGroup}>
                <label className="" htmlFor={this.nameInputId}>
                  Number
                </label>
                <input
                  className={css.input}
                  // зв'язок інпуту і state
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  id={this.nameInputId}
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
              <label className="" htmlFor={this.nameInputId}>
                Find contacts by name
              </label>
              <input
                className={css.input}
                // зв'язок інпуту і state
                value={this.state.name}
                onChange={this.handleInputChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                id={this.nameInputId}
              />
            </div>
            <ul className={css.listContact}>
              <li className={css.listItems}>
                Rosie Simpson: 459-12-56{' '}
                <button className={css.btnDeleteContact} type="button">
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
