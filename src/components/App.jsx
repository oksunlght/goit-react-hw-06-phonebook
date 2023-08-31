import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import {
  add,
  remove,
  filterContacts,
  getContacts,
  getFilter,
} from '../redux/contactsSlice';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import ContactItem from './ContactItem/ContactItem';
import Filter from './Filter/Filter';
import { Container, FormTitle, ContactsTitle } from './App.styled';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const formSubmitHandler = ({ name, number }) => {
    const contactId = nanoid(5);

    const newContact = {
      id: contactId,
      name,
      number,
    };

    const contactName = contacts.map(contact => contact.name);

    if (contactName.includes(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(add(newContact));
  };

  const deleteContact = contactId => {
    dispatch(remove(contactId));
  };

  const changeFilter = e => dispatch(filterContacts(e.currentTarget.value));

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <FormTitle>Phonebook</FormTitle>
      <Form onSubmit={formSubmitHandler} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter filter={filter} onFilterChange={changeFilter} />
      <ContactList>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={deleteContact}
          />
        ))}
      </ContactList>
    </Container>
  );
};

export default App;
