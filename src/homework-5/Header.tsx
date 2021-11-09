import { NavLink } from "react-router-dom";
import { PATH } from "./Routes";
import css from "./Header.module.css";

function Header() {
  return (
    <nav className={css.header}>
      <NavLink className={css.nav_link} to={PATH.PRE_JUNIOR}>
        Pre Junior
      </NavLink>
      <NavLink className={css.nav_link} to={PATH.JUNIOR}>
        Junior
      </NavLink>
      <NavLink className={css.nav_link} to={PATH.JUNIOR_PLUS}>
        Junior+{" "}
      </NavLink>
    </nav>
  );
}

export default Header;
