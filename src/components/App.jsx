import { FilterInput, NotificationSpan } from './AppStyle.js';
import Notification from './Notification/Notification';
// import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

const contacts =  [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
]

export const App = () => {



  const filteredContacts = contacts;
  return (
    <>
      <ContactForm />
      <FilterInput />
      {filteredContacts.length > 0 ? (
        {/* <ContactList /> */}
      ) : (
        <NotificationSpan>
          <Notification message="No contacts yet" />
        </NotificationSpan>
      )}
    </>
  );
};

export default App;
