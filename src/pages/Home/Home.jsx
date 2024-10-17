import { Banner } from "../../components/Banner/Banner";
import { HousingCard } from "../../components/HousingCard/HousingCard";
import picture from "../../assets/images/banner-home.png";
import styles from "./style.module.scss";
import json from "../../assets/json/housing.json";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <Banner
        picture={picture}
        alternativeText={"Falaise"}
        text="Chez vous, partout et ailleurs"
      />
      <section className={styles.card_container}>
        {json.map((item) => (
          <div
            className={styles.galleryItem_container}
            key={item.id}
            onClick={() => navigate("/housing/" + item.id)}
          >
            <HousingCard
              key={item.id}
              title={item.title}
              picture={item.pictures}
              currentData={item}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
