import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  const [editableId, setEditableId] = useState(null);

  return (
    <div className={s.contactList}>
      {visibleContacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            editableId={editableId}
            setEditableId={setEditableId}
          />
        );
      })}
    </div>
  );
}
