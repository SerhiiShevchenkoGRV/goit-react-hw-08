import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={s.loginPage}>
      <LoginForm />
      <div className={s.redirectCont}>
        <p>Don't have an account?</p>
        <Link to="/register">Create account </Link>
      </div>
    </div>
  );
}
