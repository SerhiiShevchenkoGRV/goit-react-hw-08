import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={s.homeCont}>
      <h1 className={s.homeTitle}>
        Welcome to the Simple Contact Manager home page
      </h1>
      <p className={s.homeDesc}>
        Here is a Simple Contact Manager - minimalistic service for adding,
        searching, and deleting contacts. Just register and start using it —
        nothing extra, only what you need.
      </p>
      <p className={s.homeDesc}>
        Below you will find the authorization data for a test account, which
        already has some sample contacts added
      </p>
      <p className={s.homeDesc}>
        <b>Email:</b> testcontacts@phb.com <br /> <br />
        <b>Password:</b> 1234567
      </p>
    </div>
  );
}
