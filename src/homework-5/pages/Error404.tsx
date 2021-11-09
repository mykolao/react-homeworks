import css from "./Error404.module.css";

function Error404() {
  return (
    <div className={css.error}>
      <div className={css.number}>404</div>
      <div className={css.message}>Page not found!</div>
      <div className={css.ascii}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
    </div>
  );
}

export default Error404;
