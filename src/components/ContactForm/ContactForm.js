import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/actions';
import { getContacts } from '../../redux/contacts/selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    formSubmitHandler({ name, number, id: uuidv4() });
    setName('');
    setNumber('');
  };

  const formSubmitHandler = item => {
    const normalizedName = item.name.toLowerCase();
    contacts.find(el => {
      return el.name.toLowerCase() === normalizedName;
    })
      ? alert(`${item.name} is alredy in contacts`)
      : dispatch(addContact(item));
  };

  const nameId = uuidv4();
  const telId = uuidv4();

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor={nameId} className={s.label}>
        Name
      </label>
      <input
        className={s.input}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleChange}
        id={nameId}
      />
      <br />
      <label htmlFor={telId} className={s.label}>
        Number
      </label>
      <input
        className={s.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={number}
        id={telId}
        onChange={handleChange}
      />
      <br />
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

// ContactForm.propTypes = {
//   state: PropTypes.objectOf(PropTypes.string),
// };

// import {connect} from 'react-redux'
// const mapStateToProps = state => {
//   return {
//     contactsList: state.contacts,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onAdd: () => dispatch(addContact),
//   };
// };

// export default connect(null, mapDispatchToProps)(ContactForm);
