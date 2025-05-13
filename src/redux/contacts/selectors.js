import { createSelector } from "@reduxjs/toolkit";
import { selectContactFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactFilter],
  (contacts, contactFilter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(contactFilter.toLowerCase()) ||
        contact.number.includes(contactFilter)
    );
  }
);
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
1;
