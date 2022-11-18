import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const initialState = {
  contacts: [
    { id: nanoid(), name: 'коля мельніков', number: '097 742 4367' },
    { id: nanoid(), name: 'коля подсобнік', number: '068 823 9986' },
    { id: nanoid(), name: 'леся', number: '645-17-79' },
    { id: nanoid(), name: 'Сергій Галепа', number: '067 379 3654' },
  ],
  filter: '',
};

const addContact = createAction('myContact/addContact');
console.log(addContact(100));

const deleteContact = createAction('myContact/deleteContact');
console.log(addContact(10));

const myReducer = createReducer(initialState, {
  [addContact]: (state, action) => console.log(state, action),
  [deleteContact]: (state, action) => console.log(state, action),
});

export const store = configureStore({
  reducer: { contacts: myReducer, filter: myReducer },
});
