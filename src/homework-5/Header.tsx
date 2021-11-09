import { NavLink } from "react-router-dom";
import { PATH } from "./Routes";

function Header() {
  return (
    <nav className="nav">
      <NavLink className="nav-link" to={PATH.PRE_JUNIOR}>
        Pre Junior
      </NavLink>
      <NavLink className="nav-link" to={PATH.JUNIOR}>
        Junior
      </NavLink>
      <NavLink className="nav-link" to={PATH.JUNIOR_PLUS}>
        Junior+{" "}
      </NavLink>
    </nav>
  );
}

export default Header;
