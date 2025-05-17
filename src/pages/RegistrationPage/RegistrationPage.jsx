import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { Link } from "react-router-dom";
import s from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div className={s.regPage}>
      <RegistrationForm />
      <div className={s.redirectCont}>
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
