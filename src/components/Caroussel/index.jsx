import styles from "./style.module.scss";
import json from "../../assets/json/housing.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { useParams } from "react-router-dom";
import { useState } from "react";

 function Carousel() {
   const { id } = useParams();

   const currentItem = json.find((item) => item.id === id);

   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   const photos = currentItem.pictures;

   const nextImage = () => {
     setCurrentImageIndex((index) =>
       index === photos.length - 1 ? 0 : index + 1
     );
   };

   const prevImage = () => {
     setCurrentImageIndex((index) =>
       index === 0 ? photos.length - 1 : index - 1
     );
   };

   return (
     <div className={styles.carousel_container}>
       <img
         className={styles.carousel_housing}
         src={photos[currentImageIndex]}
         alt={currentItem.title}
       />

       {photos.length > 1 && (
         <>
           <button className={styles.left_button} onClick={prevImage}>
           <FontAwesomeIcon
             icon={faChevronLeft}
             />
           </button>
           <p className={styles.current_slide}>
             {currentImageIndex + 1} / {photos.length}
           </p>
           <button className={styles.right_button} onClick={nextImage}>
           <FontAwesomeIcon
             icon={faChevronRight}
             />
           </button>
         </>
       )}

     </div>
   );
 }

  export default Carousel;