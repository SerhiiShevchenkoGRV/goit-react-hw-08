import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import clsx from "clsx";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useState } from "react";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  const [editableId, setEditableId] = useState(null);

  return (
    <div className={clsx(s.contactList)}>
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
