import { nanoid } from 'nanoid';
import { configureStore } from '@reduxjs/toolkit';
import { myReducer } from './reducer'

export const initialState = {
  contacts: [
    { id: nanoid(), name: 'коля мельніков', number: '097 742 4367' },
    { id: nanoid(), name: 'коля подсобнік', number: '068 823 9986' },
    { id: nanoid(), name: 'леся', number: '645-17-79' },
    { id: nanoid(), name: 'Сергій Галепа', number: '067 379 3654' },
  ],
  filter: '',
};

export const store = configureStore({
  reducer: { contacts: myReducer, filter: myReducer },
});




