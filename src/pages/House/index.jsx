import styles from "./style.module.scss";
import {Navigate, useParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import housing from "../../assets/json/housing.json";
import Carousel from "../../components/Caroussel";    
import  Collaps  from "../../components/Collaps";






  const House = () => {
    const { id } = useParams();
    if (!id) {
      return <Navigate to='/404' />
    }
    const house = housing.find((item) => item.id === id);
    if (!house) {
      return <Navigate to='/404' />
    }

    return (
      <>
        
        <main className={styles.house_main}>
          <Carousel />
          <h1 className={styles.house_title}>{house.title}</h1>
          <h2 className={styles.house_location}>{house.location}</h2>
          <h3 className={styles.house_tags}>
            {house.tags.map((item) => (
              <div key={item} className={styles.tag}>{item}</div>
            ))}
          </h3>

          <article className={styles.housse_article_host}>
            <div className={styles.host_contenair}>
              <h3 className={styles.house_host_name}>{house.host.name}</h3>
              <div className={styles.house_host_picture}>
                <img src={house.host.picture}  alt={house.host} />        
              </div>
            </div>


            <span className={styles.house_stars}>
            {[...Array(5)].map((star, index) => {
                      index += 1;
                      return (
                        <FontAwesomeIcon
                          key={index}
                          icon={faStar}
                          className={`${
                            index <= house.rating
                              ? styles.stars_active
                              : styles.stars_inactive
                          }`}
                        />
                      );
                  })}
            </span>
            
          </article>
          <div className={styles.house_information}>
            <Collaps buttonText="Description" description={house.description} />
            <Collaps buttonText="Equipement" equipement={house.equipments} />
          </div>
        </main>
      </>
    );
  }

  export default House;
