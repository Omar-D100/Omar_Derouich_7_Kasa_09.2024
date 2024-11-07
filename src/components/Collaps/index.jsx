/* eslint-disable react/prop-types */
import styles from "./style.module.scss";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';


function Collaps({ buttonText, description, equipement }) {
  const [active, setActive] = useState(false);
  const toggleDropdown = () => setActive(!active);

  return (
    <article className={styles.container}>
      <div className={styles.button_title} onClick={toggleDropdown} >
        {buttonText}
        <button className={styles.toggle_button} >
          <FontAwesomeIcon
            icon={faChevronUp}
            style={{
              transform: active ? "rotate(-180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </button>

      </div>
      {active && (
        <div className={`${styles.list}`}>
          {description ? (
            <p>{description}</p>
          ) : (
            equipement.map((element, index) => <p key={index}>{element}</p>)
          )}
        </div>
      )}
    </article>
  );
}

export default Collaps;
