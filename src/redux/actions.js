import { createAction } from "@reduxjs/toolkit";

const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
const fetchContactsError = createAction("contacts/fetchContactsError");

const filterContact = createAction("contacts/changeFilter");
const filterContactType = createAction("contacts/typeFilter");
const filterContactTypeBlur = createAction("contacts/blurFilter");

const actions = {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  filterContact,
  filterContactType,
  filterContactTypeBlur,
};
export default actions;
