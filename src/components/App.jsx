import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import ContactItem from './ContactItem/ContactItem';
import Filter from './Filter/Filter';
import { Container, FormTitle, ContactsTitle } from './App.styled';

const App = () => {
  return (
    <Container>
      <FormTitle>Phonebook</FormTitle>
      <Form />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList>
        <ContactItem />
      </ContactList>
    </Container>
  );
};

export default App;
