import logo from "../../assets/images/logo-footer.png";
import styles from "./style.module.scss";

export const Footer = () =>  {
  return (
    <footer>
      <img  className={styles.footer_logo} src={logo} alt="Logo Kasa" />
      <h3 className={styles.footer_text}>© 2020 Kasa. All rights reserved</h3>
    </footer>
  );
}


