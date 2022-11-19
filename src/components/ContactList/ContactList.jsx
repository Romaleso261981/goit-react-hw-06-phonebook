import { useSelector, useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import {
  ContactItem,
  List,
  SpanName,
  SpanNumber,
  ContactBtn,
} from './ContactList.styled';
import { deleteContact } from "../../redux/actions";

export const initialState = {
  contacts: [
    { id: nanoid(), name: 'коля мельніков', number: '097 742 4367' },
    { id: nanoid(), name: 'коля подсобнік', number: '068 823 9986' },
    { id: nanoid(), name: 'леся', number: '645-17-79' },
    { id: nanoid(), name: 'Сергій Галепа', number: '067 379 3654' },
  ],
  filter: '',
};

export const TaskList = () => {
  const dispatch = useDispatch()
  // const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);

  const visibleTasks = initialState.contacts;
  console.log(visibleTasks);
  return (
    <List>
      {visibleTasks.map(contact => (
        <ContactItem key={contact.id}>
          <SpanName>{contact.name}</SpanName>
          <SpanNumber>{contact.number}</SpanNumber>
          <ContactBtn
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </ContactBtn>
        </ContactItem>
      ))}
    </List>
  );
};