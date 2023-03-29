import React from "react";
import styles from "../cards/backgroundcards.module.css";
import classnames from "classnames";

const BackGroundCards = (props) => {
  //console.log(props);
  return (
    <div className={styles.bgCardMainContainerStyle}>
      <div>{props.icon}</div>
      <h1 className={styles.numberBg}>{props.number}</h1>
      <div
        className={[styles.cardContentWrapperStyle, props.cardContentWrapperStyle].join(" ")}
      >
        <div className={styles.cardContentInnerWrapperStyle}>
          <p className={styles.cardContentTextStyle}>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default BackGroundCards;
