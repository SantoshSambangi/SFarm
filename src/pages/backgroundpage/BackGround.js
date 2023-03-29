import React from "react";
import styles from "../backgroundpage/background.module.css";
// import {MdGroups} from 'react-icons/md';
// import {FiSmile} from 'react-icons/fi';
// import {AiOutlineCar} from 'react-icons/ai';
// import {BsCalendarEvent} from 'react-icons/bs';
import gallery from "../../assets/images/gallery.png";
import BackGroundDummyData from "../../components/dummydata/BackGroundDummydata";
import BackGroundCards from "../../components/cards/BackGroundCards";

const BackGround = () => {
  return (
    <div className={styles.container}>
      <div className={styles.insideContainer}>
        
        {BackGroundDummyData.map((item, index) => (
          <BackGroundCards
            cardContentWrapperStyle={styles.bgCardwrapperStyle}
            icon={item.icon}
            number={item.number}
            desc={item.desc}
          />
        ))}
        
      </div>

      <div className={styles.gallery}>
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

export default BackGround;
