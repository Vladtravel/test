import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "./actions";

const itemContactReducer = createReducer([], {
  [actions.fetchContactsSuccess.type]: (state, actions) => actions.payload,
});

const filterContactReducer = createReducer("", {
  [actions.filterContact.type]: (state, action) => action.payload,
  [actions.filterContactType.type]: (state, action) => action.payload,
  [actions.filterContactTypeBlur.type]: (state, action) => "",
});

const filterTypeContactReducer = createReducer("", {
  [actions.filterContactType.type]: (state, action) => action.payload,
});

const loadingContactReducer = createReducer(false, {
  [actions.fetchContactsRequest.type]: () => true,
  [actions.fetchContactsSuccess.type]: () => false,
  [actions.fetchContactsError.type]: () => false,
});

const errorContactReducer = createReducer("", {
  [actions.fetchContactsError.type]: (state, action) => action.payload,

  [actions.fetchContactsRequest.type]: () => "",
});

const contacts = combineReducers({
  items: itemContactReducer,
  filter: filterContactReducer,
  filtertype: filterTypeContactReducer,
  loading: loadingContactReducer,
  error: errorContactReducer,
});

const reducers = { contacts };
export default reducers;
