import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './actions';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: 4591256 },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const initialFilter = '';

const productContacts = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload.id),
});

const productFilter = createReducer(initialFilter, {
  [filterContact]: (_, { payload }) => payload,
});

// const productContacts = createReducer(initialContacts, {
//   [addContact]: (state, { payload }) => [...state, payload],

//   [deleteContact]: (state, { payload }) =>
//     state.filter(contacts => contacts.id !== payload.id),
// });
// const productFilter = createReducer(initialFilter, {
//   [filterContact]: (_, { payload }) => payload,
// });

// const productContacts = (state = initialContacts, action) => {
//   switch (action.type) {
//     case 'product/add':
//       return [...state, action.payload];
//     // break;
//     case 'product/delete':
//       return state.filter(contacts => contacts.id !== action.payload.id);
//     // break;
//     default:
//       return state;
//   }
// };
// const productFilter = (state = initialFilter, {payload}) => {
//   return spayloadtate;
// };
export const contactReducer = combineReducers({
  contacts: productContacts,
  filter: productFilter,
});
