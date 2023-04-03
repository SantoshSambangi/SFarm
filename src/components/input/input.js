import React from "react";
import styles from "../input/input.module.css";
export const Input = (props) => {
  return (
    <div className={styles.inputContainer}>
      <label>{props.label}</label>
      <input
        name={props.name}
        className={styles.inputStyle}
        placeholder={props.placeholder}
        value={props.inputValue}
        type={props.type || "text"}
        onChange={(e) => props.onChange(e)}
      />
    </div>
  );
};
