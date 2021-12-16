import Container from "./components/Container/Container";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { useSelector } from "react-redux";
import selectors from "./redux/selectors";

function App() {
  const error = useSelector(selectors.getContactsError);
  const isLoading = useSelector(selectors.getContactsLoading);

  return (
    <Container>
      <Filter />
      {isLoading && <p>{" Loading... "}</p>}
      {error && <p>{" Sorry, something goes wrong: " + error}</p>}
      <ContactList />
    </Container>
  );
}

export default App;
