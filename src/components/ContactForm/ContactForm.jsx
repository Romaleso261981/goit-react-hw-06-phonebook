import { useState } from 'react';
import { useDispatch} from 'react-redux';
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
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (number === 'number') {
      setNumber(value);
    }
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    dispatch(addContact({ id: nanoid(), name, number }));
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
