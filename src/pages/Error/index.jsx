/* eslint-disable react/no-unescaped-entities */
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const Error = () => {

  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to='/'> <p>Retourner sur la page d'accueil</p> </Link>
      
    </div>
  );
}

export default Error;
