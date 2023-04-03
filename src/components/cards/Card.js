import React from "react";
import styles from "../cards/card.module.css";
import { ImZoomIn } from "react-icons/im";

const ImagesIteration = (props) => {
  return (
    <>
      {props.GalleryImages ? (
        <div className={styles.galleryImages}>
          <div className={styles.imageInsideStyle}>
            <img src={props.GalleryImages} className={styles.imgStyle} />
          </div>
          <div className={styles.overLayforImageStyle}>
            <p className={styles.textStyle}>
              <ImZoomIn />
            </p>
          </div>
        </div>
      ) : (
        <div className={styles.cardShadowOne}>
          {props.icon}
          <h3>{props.heading}</h3>
          <p>{props.desc.descTop}</p>
          {props.desc.descBtm && <p>{props.desc.descBtm}</p>}
        </div>
      )}
    </>
  );
};

export default ImagesIteration;
