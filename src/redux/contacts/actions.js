import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('product/add');
export const deleteContact = createAction('product/delete');
export const filterContact = createAction('filter/value');

// export const addContacts = contacts => ({
//   type: 'contacts/add',
//   payload: contacts,
// });

// export const deleteContacts = id => ({
//   type: 'contacts/delete',
//   payload: { id },
// });

// export const filterValue = value => ({
//   type: 'filter/value',
//   payload: value,
// });
