import s from "./Header.module.css";
const Header = () => {
  return (
    <header className={s.header}>
      <img
        className={s.logo}
        src="https://i.pinimg.com/originals/c5/23/e0/c523e07187b4927fd9a2f5ac5e2eba2b.png"
      ></img>
    </header>
  );
};
export default Header;
