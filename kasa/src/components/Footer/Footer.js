import "./Footer.scss";
import { Link } from "react-router-dom";
import logo_footer from "../../assets/logo_footer.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-items">
        <Link to="/">
          <img src={logo_footer} alt="Kasa" className="footer-kasa-logo" />
        </Link>
        <p className="footer-paragraph">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
