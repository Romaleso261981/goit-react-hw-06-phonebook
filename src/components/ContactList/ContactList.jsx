import { useSelector } from 'react-redux';
import { getFilter, getItems } from '../../redux/tasksSlice';
import { useDispatch } from 'react-redux';
import { deleteContact } from "../../redux/tasksSlice";
import {
  ContactItem,
  List,
  SpanName,
  SpanNumber,
  ContactBtn,
} from './ContactList.styled';

export const TaskList = () => {
  const items = useSelector(getItems);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const visibleTasks = items.filter(item => {
    return item.name.toLowerCase().includes(filter.toLowerCase())
  }
  );

  return (
    <List>
      {visibleTasks.map(({id, name, number}) => (
        <ContactItem key={id}>
          <SpanName>{name}</SpanName>
          <SpanNumber>{number}</SpanNumber>
          <ContactBtn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ContactBtn>
        </ContactItem>
      ))}
    </List>
  );
};
