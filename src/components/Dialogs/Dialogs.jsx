import s from "./Dialogs.module.css";
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>Valera</div>
        <div className={s.dialog + " " + s.active}>Max</div>
        <div className={s.dialog}>Vlad</div>
        <div className={s.dialog}>Dima</div>
        <div className={s.dialog}>Lesha</div>
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
