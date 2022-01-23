// import { connect } from 'react-redux';
// import { filter } from '../../redux/contacts/reducers';
import { v4 as uuidv4 } from 'uuid';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/actions';
import { getFilter } from '../../redux/contacts/selectors';
import s from './Filter.module.css';

export default function Component() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilter = useCallback(
    e => {
      dispatch(filterContact(e.target.value));
    },
    [dispatch],
  );

  // const changeFilter = useCallback(
  //   e => {
  //     const filteredContacts = value => dispatch(filterContact(value));
  //     filteredContacts(e.target.value);
  //   },
  //   [dispatch],
  // );
  const nameFind = uuidv4();
  return (
    <div className={s.div}>
      <label htmlFor={nameFind} className={s.label}>
        Find contacts by name:
      </label>
      <input type="text" value={filter} id={nameFind} onChange={changeFilter} />
    </div>
  );
}

// function Filter({ filter, filterContact }) {
//   const changeFilter = useCallback(
//     e => {
//       filterContact(e.target.value);
//     },
//     [filterContact],
//   );

//   return (
//     <div>
//       <label htmlFor={uuidv4()}>Find contacts by name</label>
//       <input type="text" value={filter} id={uuidv4()} onChange={changeFilter} />
//     </div>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     filter: state.filter,
//   };
// };

// const mapDispatchToProps = { filterContact };

// export default connect(mapStateToProps, mapDispatchToProps)(Component);
