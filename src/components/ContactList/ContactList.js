import { useSelector, useDispatch } from "react-redux";
import operations from "../../redux/operations";
import selectors from "../../redux/selectors";
import s from "./ContactList.module.css";
import { useEffect } from "react";
const shortid = require("shortid");

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectors.getContactList);

  useEffect(() => {
    if (contacts.length) return;
    dispatch(operations.fetchContacts());
  }, [contacts.length, dispatch]);

  return (
    <div>
      <table className={s.table}>
        <thead>
          <tr>
            <th>name</th>
            <th>lastname</th>
            <th>age</th>
            <th>sex</th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map(({ name, lastname, age, sex }) => (
              <tr key={shortid.generate()}>
                <td>{name}</td>
                <td>{lastname}</td>
                <td>{age}</td>
                <td>{sex}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
