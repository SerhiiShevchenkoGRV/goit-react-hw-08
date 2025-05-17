import { useDispatch } from "react-redux";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import s from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();
  const initialValues = {
    username: "",
    number: "",
  };
  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const { username, number } = values;
    dispatch(
      addContact({
        name: username,
        number: number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.contactForm}>
        <div className={s.nameCont}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            type="text"
            name="username"
            id={nameFieldId}
            className={s.nameInput}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={s.nameError}
          />
        </div>

        <div className={s.numberCont}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="tel"
            name="number"
            id={numberFieldId}
            className={s.telInput}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={s.numberError}
          />
        </div>

        <button type="submit" className={s.submitBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
