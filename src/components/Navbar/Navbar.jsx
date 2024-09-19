import s from "./Navbar.module.css";

/*let s = {
  nav: ".Navbar_nav__qsnK9",
  item: ".Navbar_item__1AU57",
};*/
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a>Profil</a>
      </div>
      <div className={s.item}>
        <a>Messages</a>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      <div className={s.item}>
        <a>Setting</a>
      </div>
    </nav>
  );
};

export default Navbar;
