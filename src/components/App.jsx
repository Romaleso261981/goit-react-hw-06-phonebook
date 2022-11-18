import { FilterInput, NotificationSpan } from './AppStyle.js';
import { useState, useEffect } from 'react';
import Notification from './Notification/Notification';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

export const App = () => {


  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);


  // const addContact = contact => {
  //   if (
  //     contacts.filter(({ number }) => number === contact.number).length !== 0
  //   ) {
  //     alert(contact.number + ' this number is already in your phone book');
  //     return;
  //   } else {
  //     const newContact = { id: nanoid(), ...contact };
  //     setContacts([...contacts, newContact]);
  //     console.log(contacts);
  //   }
  // };

  // const deleteContact = id => {
  //   const updatedContacts = contacts.filter(contact => contact.id !== id);
  //   localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  //   setContacts(updatedContacts);
  // };

  // const handleFilter = e => {
  //   setFilter(e.target.value);
  // };

  // const getFilteredContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  const filteredContacts = getFilteredContacts();
  return (
    <>
      <ContactForm />
      <FilterInput />
      {filteredContacts.length > 0 ? (
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
