import { useSelector } from 'react-redux';
import { getFilter, getItems } from '../../redux/tasksSlice';
import {
  ContactItem,
  List,
  SpanName,
  SpanNumber,
  ContactBtn,
} from './ContactList.styled';

export const TaskList = () => {
  const items = useSelector(getItems);
  console.log(items);
  const filter = useSelector(getFilter);
  console.log(filter);

  const visibleTasks = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  console.log(visibleTasks);
  return (
    <List>
      {visibleTasks.map(contact => (
        <ContactItem key={contact.id}>
          <SpanName>{contact.name}</SpanName>
          <SpanNumber>{contact.number}</SpanNumber>
          <ContactBtn type="button" onClick={e => console.log(e)}>
            Delete
          </ContactBtn>
        </ContactItem>
      ))}
    </List>
  );
};
