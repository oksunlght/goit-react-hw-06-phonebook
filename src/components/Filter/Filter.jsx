import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts, getFilter } from 'redux/contactsSlice';
import { InputLabel, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const onFilterChange = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <InputLabel>
      Find contacts by name
      <Input type="text" value={filter} onChange={onFilterChange} />
    </InputLabel>
  );
};

export default Filter;
