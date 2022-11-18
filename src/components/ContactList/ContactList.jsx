import { useSelector } from "react-redux";
import {
  ContactItem,
  List,
  SpanName,
  SpanNumber,
  ContactBtn,
} from './ContactList.styled';



export const TaskList = () => {
  // const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);

  const visibleTasks = contacts.contacts;
  console.log(visibleTasks);
  return (
    <List>
      {visibleTasks.map(contact => (
        <ContactItem key={contact.id}>
          <SpanName>{contact.name}</SpanName>
          <SpanNumber>{contact.number}</SpanNumber>
          <ContactBtn
            type="button"
            onClick={(e) => {
              console.log(e);
            }}
          >
            Delete
          </ContactBtn>
        </ContactItem>
      ))}
    </List>
  );
};