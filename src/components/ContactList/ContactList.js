// import {connect} from 'react-redux'
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/contacts/selectors';

import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }, [filter, contacts]);

  // function ContactList({ contacts, filter }) {
  //   const filteredContacts = useMemo(() => {
  //     const normalizedFilter = filter.toLowerCase();
  //     return contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(normalizedFilter),
  //     );
  //   }, [filter, contacts]);

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}

// const mapStateToProps = state => {
//   return {
//     contacts: state.contacts,
//     filter: state.filter,
//   };
// };

// export default connect(mapStateToProps)(ContactList);
