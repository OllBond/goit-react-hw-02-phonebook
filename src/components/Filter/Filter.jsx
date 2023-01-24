import css from './Filter.module.css';
const Filter = ({ handleInputChange, value }) => {
  return (
    <div className={css.conactFormGroup}>
      <label className="">Find contacts by name</label>
      <input
        className={css.input}
        // зв'язок інпуту і state
        value={value}
        onChange={handleInputChange}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};

export default Filter;
