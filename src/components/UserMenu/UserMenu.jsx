import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={s.userMenu}>
      <h2 className={s.userName}>Welcome, {user.name}</h2>
      <button className={s.logoutBtn} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
