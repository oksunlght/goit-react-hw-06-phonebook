import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    add(state, action) {
      state.contacts.push(action.payload);
    },
    remove(state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { add, remove, filterContacts } = contactsSlice.actions;

// Selectors

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
