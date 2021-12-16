import { createSelector } from "@reduxjs/toolkit";

const getContactsItems = (state) => state.contacts.items;
const getContactsFilter = (state) => state.contacts.filter;
const getContactsFilterType = (state) => state.contacts.filtertype;

const getContactsError = (state) => state.contacts.error;
const getContactsLoading = (state) => state.contacts.loading;

const getContactList = createSelector(
  [getContactsItems, getContactsFilter, getContactsFilterType],
  (items, filter, filtertype) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter((contact) => {
      if (contact[filtertype]) {
        return contact[filtertype]
          .toString()
          .toLowerCase()
          .includes(normalizedFilter);
      }
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  }
);

const selectors = {
  getContactsItems,
  getContactsError,
  getContactsLoading,
  getContactList,
};
export default selectors;
