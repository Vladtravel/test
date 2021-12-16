import axios from "axios";
import actions from "./actions";

axios.defaults.baseURL = "https://venbest-test.herokuapp.com/";

const fetchContacts = () => (dispatch) => {
  dispatch(actions.fetchContactsRequest());
  axios
    .get("/")
    .then(({ data }) => {
      dispatch(actions.fetchContactsSuccess(data));
    })
    .catch((error) => dispatch(actions.fetchContactsError(error.message)));
};

const operations = {
  fetchContacts,
};

export default operations;
