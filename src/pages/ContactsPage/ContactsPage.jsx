import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import s from "./ContactsPage.module.css";
import ContactModal from "../../components/ContactModal/ContactModal";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.contactsCont}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {(loading && <h1>Loading...</h1>) ||
        (error && <h1>{error}</h1>) ||
        (!loading && !error && <ContactList />)}
      <ContactModal />
    </div>
  );
}
