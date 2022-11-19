import {
  InputLabel,
  FormWrap,
  InputSpan,
  InputSpanName,
  FormBtn,
  InputForm,
} from './ContactFormStyle.js';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/reducer';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
  };

  const onSubmit = event => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name);
    // dispatch(addTask(form.elements.text.value));
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

// import { useDispatch } from "react-redux";
// import { Button } from "components/Button/Button";
// import { addTask } from "redux/tasksSlice";
// import css from "./TaskForm.module.css";

// export const TaskForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = event => {
//     event.preventDefault();
//     const form = event.target;
//     dispatch(addTask(form.elements.text.value));
//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <input
//         className={css.field}
//         type="text"
//         name="text"
//         placeholder="Enter task text..."
//       />
//       <Button type="submit">Add task</Button>
//     </form>
//   );
// };
