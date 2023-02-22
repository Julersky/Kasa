import "./Header.scss";
import Navbar from "../Navbar/Navbar";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="kasa-header">
      <Link to="/" className="link-logo">
        <img src={logo} alt="Kasa" className="kasa-logo" />
      </Link>
      <Navbar />
    </header>
  );
}

export default Header;
