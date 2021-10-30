import React, { useState } from 'react';
import Container from './Components/Container';
import Section from './Components/Section';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';
import useLocalStorage from './hooks/hooks';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  // додаються контакти
  const addContact = data => {
    // this.setState(prevState => {
    if (contacts.some(contact => contact.name.includes(data.name))) {
      return alert(`${data.name} is already in contacts!`);
    }

    setContacts([...contacts, data]);
  };

  const deleteContact = currentId => {
    // this.setState(prevState => {
    setContacts([...contacts.filter(contact => contact.id !== currentId)]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value.toLocaleLowerCase());
  };

  const turnOnFilter = () => {
    // const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter),
    );
  };

  return (
    <Container title="Phonebook">
      <Section title="You can add new contacts below:">
        <ContactForm onSubmit={addContact}></ContactForm>
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChangeFilter={changeFilter} />
        {filter === '' ? (
          <ContactList contacts={contacts} deleteContact={deleteContact} />
        ) : (
          <ContactList
            contacts={turnOnFilter()}
            deleteContact={deleteContact}
          />
        )}
      </Section>
    </Container>
  );
}

export default App;
