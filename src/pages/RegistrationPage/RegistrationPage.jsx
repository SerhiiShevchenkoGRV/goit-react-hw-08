import s from "./RegistrationPage.module.css";

import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { Link } from "react-router-dom";

export default function RegistrationPage() {
  return (
    <div className={s.regPage}>
      <RegistrationForm />
      <Link to="/login">Login</Link>
    </div>
  );
}
