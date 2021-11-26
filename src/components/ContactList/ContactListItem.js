// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/actions';
import s from './ContactList.module.css';

export default function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();
  const onDelete = id => dispatch(deleteContact(id));

  return (
    <li className={s.listItem}>
      <span className={s.span}>{name}:</span>
      <span className={s.span}>{number}:</span>
      <button
        className={s.button}
        type="button"
        id={id}
        onClick={() => {
          onDelete({ id });
        }}
      >
        Delete
      </button>
    </li>
  );
}

// export default function ContactListItem({ name, number, id, onDeleteContact }) {
//   return (
//     <li className={s.listItem}>
//       <span className={s.span}>{name}:</span>
//       <span className={s.span}>{number}:</span>
//       <button
//         className={s.button}
//         type="button"
//         id={id}
//         onClick={() => onDeleteContact(id)}
//       >
//         Delete
//       </button>
//     </li>
//   );
// }
// const mapDispatchToProps = { deleteContact };

// export default connect(null, mapDispatchToProps)(ContactList);
