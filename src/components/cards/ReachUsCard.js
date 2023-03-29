import React from "react";
import styles from "../cards/reachUsCard.module.css";

const ReachUsCard = (props) => {
  //console.log(props);
  return (
    <div className={styles.cardShadowOne}>
      {props.icon}
      <h3>{props.heading}</h3>
      <p>{props.desc.descTop}</p>
      {props.desc.descBtm && <p>{props.desc.descBtm}</p>}
    </div>
  );
};

export default ReachUsCard;
