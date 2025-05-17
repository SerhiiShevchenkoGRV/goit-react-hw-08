import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import s from "./LoginForm.module.css";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
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
