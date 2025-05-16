import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { openModal } from "../../redux/modal/slice";
import { cancelEdit, changeOnEdit } from "../../redux/contact/slice";
import {
  selectId,
  selectName,
  selectNumber,
} from "../../redux/contact/selectors";
import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { editContact } from "../../redux/contact/operations";
import s from "./Contact.module.css";

export default function Contact({ contact }) {
  const { name, number, id } = contact;
  const initialValues = contact;
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();
  const currentId = useSelector(selectId);
  // const newName = useSelector(selectName);
  // const newNumber = useSelector(selectNumber);

  const handleOpen = () => dispatch(openModal(id));
  const handleEdit = () => {
    if (currentId !== null) {
      return dispatch(cancelEdit());
    }
    dispatch(changeOnEdit(id));
  };
  const onEdit = currentId === id;

  const handleSubmit = (values) => {
    const { name, number } = values;
    dispatch(editContact({ name, number, id }));
    dispatch(cancelEdit());
  };

  return (
    <div className={s.contactCard}>
      <div className={s.contactItems}>
        {onEdit ? (
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            <Form className={s.contForm}>
              <div className={s.contFields}>
                <Field type="text" name="name" id={nameFieldId} />
                <Field type="tel" name="number" id={numberFieldId} />
              </div>
              <div className={s.btnCont}>
                <button className={s.editBtn} type="submit">
                  Save
                </button>
                <button className={s.delBtn} type="button" onClick={handleOpen}>
                  Delete
                </button>
              </div>
            </Form>
          </Formik>
        ) : (
          <>
            <div className={s.contFields}>
              <p className={s.userDesc}>
                <FaUser className={s.userIcon} />
                {name}
              </p>
              <a href={`tel:${number}`} className={s.userTel}>
                <FaPhoneAlt className={s.telIcon} />
                {number}
              </a>
            </div>
            <div className={s.btnCont}>
              <button className={s.editBtn} onClick={handleEdit}>
                Edit
              </button>
              <button className={s.delBtn} onClick={handleOpen}>
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
