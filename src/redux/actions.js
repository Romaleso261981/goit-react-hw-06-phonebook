import { createAction} from '@reduxjs/toolkit';


export const addContact = createAction('myContact/addContact');
console.log(addContact(100));

export const deleteContact = createAction('myContact/deleteContact');
console.log(deleteContact(10));