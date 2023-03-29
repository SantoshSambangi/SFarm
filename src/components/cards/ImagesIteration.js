import React from "react";
import GalleryImages from "../dummydata/GalleryImages";
import styles from "../cards/imagesIteration.module.css";

const ImagesIteration = (props) => {
  return (
    <div className={styles.galleryImages}>
      <img src={props.GalleryImages} />
    </div>
  );
};

export default ImagesIteration;
