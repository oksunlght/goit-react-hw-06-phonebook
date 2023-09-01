import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { add, getContacts } from 'redux/contactsSlice';
import { ContactForm, InputLabel, Input, SubmitBtn } from './Form.styled';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();

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

    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <ContactForm onSubmit={handleSubmit}>
      <InputLabel>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="off"
          required
          onChange={handleChange}
        />
      </InputLabel>
      <InputLabel>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          autoComplete="off"
          required
          onChange={handleChange}
        />
      </InputLabel>

      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </ContactForm>
  );
};

export default Form;
