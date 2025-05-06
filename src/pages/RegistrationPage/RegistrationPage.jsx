import { Field, Form, Formik } from "formik";
import s from "./RegistrationPage.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div className={s.regFormCont}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.regForm}>
          <label className={s.label}>
            <span>Name:</span>
            <Field name="name" className={s.input} />
          </label>
          <label className={s.label}>
            <span>Email:</span>
            <Field name="email" className={s.input} />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field name="password" type="password" className={s.input} />
          </label>
          <button type="submit" className={s.regBtn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
