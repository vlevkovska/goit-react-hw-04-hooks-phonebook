import React from 'react';
import Container from './Components/Container';
import Section from './Components/Section';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    this.setState(prevState => {
      if (
        prevState.contacts.some(contact => contact.name.includes(data.name))
      ) {
        return alert(`${data.name} is already in contacts!`);
      }

      return { contacts: [...prevState.contacts, data] };
    });
  };

  deleteContact = currentId => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts.filter(contact => contact.id !== currentId),
        ],
      };
      // let indx = null;
      // for (let i = 0; i < prevState.contacts.length; i += 1) {
      //   if (prevState.contacts[i].id === currentId) {
      //     indx = i;
      //   }
      // }
      // prevState.contacts.splice(indx, 1);
      // return { contacts: [...prevState.contacts] };
    });
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value.toLocaleLowerCase() });
  };

  turnOnFilter = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter),
    );
  };

  render() {
    return (
      <Container title="Phonebook">
        <Section title="You can add new contacts below:">
          <ContactForm onSubmit={this.addContact}></ContactForm>
        </Section>
        <Section title="Contacts">
          <Filter
            filter={this.state.filter}
            onChangeFilter={this.changeFilter}
          />
          {this.state.filter === '' ? (
            <ContactList
              contacts={this.state.contacts}
              deleteContact={this.deleteContact}
            />
          ) : (
            <ContactList
              contacts={this.turnOnFilter()}
              deleteContact={this.deleteContact}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
