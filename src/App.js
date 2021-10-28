import React, { useState } from 'react';
import Container from './Components/Container';
import Section from './Components/Section';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';
import useLocalStorage from './Components/hooks/hooks';

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
  //     return { contacts: [...prevState.contacts, data] };
  //   });
  // };

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

  //-- Local storage
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  // componentDidMount() {
  //   console.log('App componentDidMount');

  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }

  //   console.log(parsedContacts);
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdate');
  //   if (this.state.contacts !== prevState.contacts) {
  //     console.log('обновились contacts');
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  //   console.log(prevState);
  //   console.log(this.state);
  // }
  /////
  // render() {
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
