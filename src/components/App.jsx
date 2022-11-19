import ContactForm from '../components/ContactForm/ContactForm';
import { NotificationSpan } from './AppStyle.js';
import { TaskList } from './ContactList/ContactList';
import Notification from './Notification/Notification';

export const App = () => {
  return (
    <>
      <ContactForm />
      {false > 0 ? (
        <TaskList />
      ) : (
        <NotificationSpan>
          <Notification message="No contacts yet" />
        </NotificationSpan>
      )}
    </>
  );
};

export default App;
