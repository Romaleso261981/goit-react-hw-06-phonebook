import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import { ContactListItem } from '../../components/ContactListItem/ContactListItem'

export const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {filteredItems.map(item => (
        <ContactListItem key={item.id} item={item} />
      ))}
    </List>
  );
};
export default ContactList;
