import React from "react";
import styles from "../contactpage/contact.module.css";
import gloab from "../../assets/images/gloab.jpg";
//import ReachUsCard from "../../components/cards/ReachUsCard";
import ReachUsData from "../../components/excessdata/ReachUsData";
import GalleryImages from "../../components/excessdata/GalleryImages";
import ImagesIteration from "../../components/cards/Card";

const Contact = () => {

  return (
    <div className={styles.galleryOne}>
      <section className={styles.galleryImagesSection}>
        {GalleryImages &&
          GalleryImages.map((item, index) => (
            <ImagesIteration key={index} GalleryImages={item.GalleryImg1}/>
          ))}
      </section>

      <div className={styles.viewBtn}>
        <button>View More</button>
      </div>

      <div className={styles.reachUs}>
        <div className={styles.aboutOne}>
          <h1>Reach Us</h1>
        </div>

        <div className={styles.reacUs}>
          <span className={styles.line}></span> <img src={gloab} width={40} />
          <span className={styles.line}></span>
        </div>
      </div>

      <div className={styles.galleryCards}>
        {ReachUsData &&
          ReachUsData.map((item, index) => (
            <ImagesIteration key={index}
              icon={item.icon}
              heading={item.heading}
              desc={item.desc}
            />
          ))}
      </div>

      <div className={styles.getIntouch} id="form">
        <h1>Get In Touch</h1>
      </div>
    </div>
  );
};

export default Contact;
