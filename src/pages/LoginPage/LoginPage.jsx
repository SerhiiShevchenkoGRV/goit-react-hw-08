import { Field, Form, Formik } from "formik";
import s from "./LoginPage.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(login(values))
      .unwrap()
      .then(() => {
        navigate("/contacts");
      })
      .catch(() => alert("Invalid data"));
    actions.resetForm();
  };
  return (
    <div className={s.regFormCont}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.regForm}>
          <label className={s.label}>
            <span>Email:</span>
            <Field name="email" className={s.input} />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field name="password" type="password" className={s.input} />
          </label>
          <button type="submit" className={s.regBtn}>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
