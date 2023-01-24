import { Component } from 'react';
import css from './ContactForm.module.css';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  // метод, який оновить state
  // збирає дані
  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;
    // передає state
    // розпилення, щоб не мутували
    onSubmit({ ...this.state });
    // обнуляє name і number
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { handleInputChange, handleSubmit } = this;
    const { name, number } = this.state;
    return (
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
      </div>
    );
  }
}
export default ContactForm;
