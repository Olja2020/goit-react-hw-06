import { createSlice,  nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    
    //  deleteTask(state, action) {
    //   const index = state.findIndex(task => task.id === action.payload);
    //   state.splice(index, 1);
    // },
    deleteContact(state, action) {
      const index = state.items.findIndex((contact) => contact.id === action.payload);
      state.items.splice(index, 1);
    },
      addContact: {
        reducer(state, action) {
          state.items.push(action.payload);
        },
        prepare(name, number) {
          return {
            payload: {
              id: nanoid(),
              name,
              number,
            },
          };
        },
      },
   
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
export const contactsReducer = contactsSlice.reducer;
