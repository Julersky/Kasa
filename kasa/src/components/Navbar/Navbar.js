import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li
          className={location.pathname === "/" ? "nav-link-active" : "nav-link"}
        >
          <Link to="/" className="nav-link-text">
            Accueil
          </Link>
        </li>
        <li
          className={
            location.pathname === "/a-propos" ? "nav-link-active" : "nav-link"
          }
        >
          <Link to="/a-propos" className="nav-link-text">
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
