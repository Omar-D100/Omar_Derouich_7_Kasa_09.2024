/* eslint-disable react/prop-types */
import styles from "./style.module.scss";

const Banner = ({ text, picture, }) => {
  return (
    <div className={styles.banner_container}>
      <img className={styles.banner_image} src={picture}  />
      <h1 className={styles.banner_text}>{text}</h1>
    </div>
  );
}

export default Banner;
