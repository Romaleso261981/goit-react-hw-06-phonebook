import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './actions';
import { nanoid } from 'nanoid';

export const myReducer = createReducer(
  [
    { id: nanoid(), name: 'коля мельніков', number: '097 742 4367' },
    { id: nanoid(), name: 'коля подсобнік', number: '068 823 9986' },
    { id: nanoid(), name: 'леся', number: '645-17-79' },
    { id: nanoid(), name: 'Сергій Галепа', number: '067 379 3654' },
  ].contacts,
  {
    [addContact]: (state, action) => console.log(state, action),
    [deleteContact]: (state, action) => console.log(state, action),
  }
);
