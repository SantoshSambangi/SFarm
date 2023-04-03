import React from "react";
import styles from "../cards/visitorscard.module.css";

const ContactBackGroundCards = (props) => {
  //console.log(props);
  return (
    <div className={styles.bgCardMainContainerStyle}>
      <div>{props.icon}</div>
      <h1 className={styles.numberBg}>{props.number}</h1>
      <div
        className={[
          styles.cardContentWrapperStyle,
          props.cardContentWrapperStyle,
        ].join(" ")}
      >
        <div className={styles.cardContentInnerWrapperStyle}>
          <p className={styles.cardContentTextStyle}>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBackGroundCards;
