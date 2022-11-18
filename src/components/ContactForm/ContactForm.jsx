import {
  InputLabel,
  FormWrap,
  InputSpan,
  InputSpanName,
  FormBtn,
  InputForm,
} from './ContactFormStyle.js';

const ContactForm = () => {
  const handleChange = e => {};

  const onSubmit = e => {
    e.preventDefault();
    reset();
  };

  const reset = () => {
    console.log('reset');
  };

  return (
    <FormWrap onSubmit={onSubmit}>
      <InputLabel>
        <InputSpanName>Name</InputSpanName>
        <InputForm
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputLabel>
      <InputLabel>
        <InputSpan>Number</InputSpan>
        <InputForm
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputLabel>
      <FormBtn type="submit">Add contact</FormBtn>
    </FormWrap>
  );
};

export default ContactForm;
