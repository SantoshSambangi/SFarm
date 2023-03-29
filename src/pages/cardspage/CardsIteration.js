import React from "react";
import styles from "../cardspage/cardsiteration.module.css";
// import image1 from '../../assets/images/g1.jpg';
// import image2 from '../../assets/images/g2.jpg';
// import image3 from '../../assets/images/g3.jpg';
// import image4 from '../../assets/images/g4.jpg';
// import image5 from '../../assets/images/g5.jpg';
// import image6 from '../../assets/images/g6.jpg';
// import image7 from '../../assets/images/g7.jpg';
// import image8 from '../../assets/images/g8.jpg';
import gloab from "../../assets/images/gloab.jpg";
// import {ImLocation} from 'react-icons/im';
// import {ImMobile} from 'react-icons/im';
// import {MdOutlineEmail} from 'react-icons/md';
import ReachUsCard from "../../components/cards/ReachUsCard";
import ReachUsData from "../../components/dummydata/ReachUsData";
import GalleryImages from "../../components/dummydata/GalleryImages";
import ImagesIteration from "../../components/cards/ImagesIteration";

const CardsIteration = () => {
  return (
    <div className={styles.galleryOne}>
      <section className={styles.galleryImagesSection}>
        {GalleryImages &&
          GalleryImages.map((item, index) => (
            <ImagesIteration GalleryImages={item.GalleryImg1} />
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
            <ReachUsCard
              icon={item.icon}
              heading={item.heading}
              desc={item.desc}
            />
          ))}
      </div>

      <div className={styles.getIntouch}>
        <h1>Get In Touch</h1>
      </div>

      <div className={styles.formSection}>
        <div className={styles.insideFormSection}>
          <form className={styles.formGroup}>
            <div className={styles.formContainer}>
              <div className={styles.formOne}>
                <p>Name*</p>
                <br />
                <input className={styles.inputField} />
                <br />
                <br />
                <p>PhoneNumber*</p>
                <br />
                <input className={styles.inputField} />
              </div>

              <div className={styles.formTwo}>
                <p>Email*</p>
                <br />
                <input className={styles.inputField} />
                <br />
                <br />
                <p>Subject*</p>
                <br />
                <input className={styles.inputField} />
              </div>
            </div>

            <div className={styles.formThree}>
              <p>message*</p>
              <br />
              <textarea></textarea>
            </div>

            <div className={styles.formBtn}>
              <button>SEND</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardsIteration;
