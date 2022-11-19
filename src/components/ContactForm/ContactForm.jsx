import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../redux/tasksSlice';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/tasksSlice';

import {
  InputLabel,
  FormWrap,
  InputSpan,
  InputSpanName,
  FormBtn,
  InputForm,
} from './ContactFormStyle.js';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
    } else if (value === 'number') {
    }
  };

  const handleSubmitForm = event => {
    if (items.find(item => item.name === name)) {
      Notiflix.Notify.failure(`This contact is already exists`, {
        position: 'top-center',
        autoClose: 5000,
      });
      return;
    }
    event.preventDefault();
    dispatch(addContact({ id: nanoid(), name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormWrap onSubmit={handleSubmitForm}>
      <InputLabel>
        <InputSpanName>Name</InputSpanName>
        <InputForm
          onChange={handleChange}
          type="text"
          name="name"
        />
      </InputLabel>
      <InputLabel>
        <InputSpan>Number</InputSpan>
        <InputForm
          onChange={handleChange}
          type="tel"
          name="number"
        />
      </InputLabel>
      <FormBtn type="submit">Add contact</FormBtn>
    </FormWrap>
  );
};

export default ContactForm;
