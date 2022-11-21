import ContactForm from '../components/ContactForm/ContactForm';
import { NotificationSpan } from './AppStyle.js';
import { useSelector } from 'react-redux';
import { getItems } from '../redux/tasksSlice';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';

import Notification from './Notification/Notification';

export const App = () => {
  const items = useSelector(getItems);
  return (
    <>
      <ContactForm />
      {items.length > 0 ? (
        <Filter />
      ) : (
        <NotificationSpan>
        <div>Loding.....</div>
        </NotificationSpan>
      )}
      {items.length > 0 ? (
        <ContactList />
      ) : (
        <NotificationSpan>
          <Notification message="No contacts yet" />
        </NotificationSpan>
      )}
    </>
  );
};

export default App;
