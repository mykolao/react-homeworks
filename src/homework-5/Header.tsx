import { NavLink } from "react-router-dom";
import { PATH } from "./Routes";
import css from "./Header.module.css";
import { useState } from "react";

function Header() {
  const [navHider, setNavHider] = useState<"<" | ">">(">");

  const [navState, setNavState] = useState<
    "visible" | "hidden"
  >("hidden");

  const onHoverHandler = () => {
    setNavHider(navHider === ">" ? "<" : ">");
    setNavState(navState === "hidden" ? "visible" : "hidden");
  };
  return (
    <div
      className={css.header}
      onMouseEnter={onHoverHandler}
      onMouseLeave={onHoverHandler}
    >
      <nav className={`${css.nav} ${css[navState]}`}>
        <NavLink
          className={css.nav_link}
          activeClassName={css.active}
          to={PATH.PRE_JUNIOR}
        >
          Pre Junior
        </NavLink>
        <NavLink
          className={css.nav_link}
          activeClassName={css.active}
          to={PATH.JUNIOR}
        >
          Junior
        </NavLink>
        <NavLink
          className={css.nav_link}
          activeClassName={css.active}
          to={PATH.JUNIOR_PLUS}
        >
          Junior+
        </NavLink>
      </nav>
      <div className={`${css.nav_hider} ${css[navState]}`}>
        {navHider}
      </div>
    </div>
  );
}

export default Header;
