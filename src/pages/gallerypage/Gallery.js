import React from "react";
import gallery from "../../assets/images/gallery.png";
import ContactRequiredData from "../../components/excessdata/ContactRequiredData";
import ContactBackGroundCards from "../../components/cards/VisitorsCard";
import styles from "../gallerypage/gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles.container} >
      <div className={styles.insideContainer}>
        {ContactRequiredData.map((item, index) => (
          <ContactBackGroundCards
            key={index}
            // cardContentWrapperStyle={styles.bgCardwrapperStyle}
            icon={item.icon}
            number={item.number}
            desc={item.desc}
          />
        ))}
      </div>

      <div className={styles.gallery} id="gallery">
        <div className={styles.galleryOne}>
          <h1>Our Gallery</h1>
        </div>

        <div className={styles.galleryTwo}>
          <span className={styles.line}></span> <img src={gallery} width={50} />
          <span className={styles.line}></span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
