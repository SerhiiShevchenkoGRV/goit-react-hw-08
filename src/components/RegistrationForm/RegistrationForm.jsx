import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

import s from "./RegistrationForm.module.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function RegistrationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        navigate("/contacts", { replace: true });
      })
      .catch(() => toast.error("Invalid data"));

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
