/* eslint-disable react/prop-types */
import styles from "./style.module.scss";

const HouseCard = (props) =>  {
  return (
    <div className={styles.card}>
      <img src={props.picture[0]} alt={props.title} />
      <div className={styles.gradient}></div>
      <h2>{props.title}</h2>
    </div>
  );
}

export default HouseCard;
