import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { openModal } from "../../redux/modal/slice";
import { editContact } from "../../redux/contacts/operations";
import s from "./Contact.module.css";

export default function Contact({ contact, editableId, setEditableId }) {
  const { id } = contact;
  const [initValue, setInitValue] = useState(contact);
  const [value, setValue] = useState(contact);
  const dispatch = useDispatch();
  const isEditing = editableId === id;
  const cardRef = useRef();

  const handleOpen = () => dispatch(openModal(id));
  const handleEdit = () => {
    if (isEditing) {
      if (value !== initValue) {
        dispatch(editContact(value));
        setInitValue(value);
      }
      setEditableId(null);
    } else {
      setEditableId(id);
    }
  };

  const handleChange = (e) => {
    const { name, value: inputValue } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (isEditing && cardRef.current && !cardRef.current.contains(e.target)) {
        setEditableId(null);
        setValue(initValue);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isEditing, setEditableId]);

  return (
    <div className={s.contactCard} ref={cardRef}>
      <div className={s.contactItems}>
        <div className={s.contFields}>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={value.name}
              onChange={handleChange}
            ></input>
          ) : (
            <p className={s.userDesc}>
              <FaUser className={s.userIcon} />
              {value.name}
            </p>
          )}
          {isEditing ? (
            <input
              type="tel"
              name="number"
              value={value.number}
              onChange={handleChange}
            ></input>
          ) : (
            <a href={`tel:${value.number}`} className={s.userTel}>
              <FaPhoneAlt className={s.telIcon} />
              {value.number}
            </a>
          )}
        </div>
        <div className={s.btnCont}>
          <button className={s.editBtn} onClick={handleEdit}>
            {isEditing ? "Save" : "Edit"}
          </button>
          <button className={s.delBtn} onClick={handleOpen}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
