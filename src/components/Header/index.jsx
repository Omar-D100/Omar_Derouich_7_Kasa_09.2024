import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";

const Header = () =>  {
  return (
    
    <header>
      <NavLink to="/">
        <img src={logo} className={styles.header_logo} alt="Logo Kasa" />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active_link : "")}
            >
              ACCUEIL
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active_link : "")}
            >
              A PROPOS
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
