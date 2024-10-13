import s from "./Dialogs.module.css";
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>Valera</div>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/1">Max</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Vlad</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3"></NavLink>Dima
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Lesha</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>HI</div>
        <div className={s.message}>How are you</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
