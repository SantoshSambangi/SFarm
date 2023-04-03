import React from "react";
import { useState } from "react";
import styles from "../formpage/formvalidation.module.css";
import { Input } from "../../components/input/input";

const FormValidation = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleInputs = (e) => {
    // setData(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitFormData = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className={styles.formSection}>
      <div className={styles.insideFormSection}>
        <form className={styles.formGroup} onSubmit={submitFormData} >
          <div className={styles.formContainer}>
            <div className={styles.formFields}>
              <Input
                label="Name"
                placeholder="Enter name"
                name="name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />

              <Input
                label="Phone Number"
                placeholder="phone number"
                name="phone number"
                value={data.name}
                onChange={(e) =>
                  setData({ ...data, phonenumber: e.target.value })
                }
              />
            </div>

            <div className={styles.formFields}>
              <Input
                label="E-mail"
                placeholder="E-mail"
                name="email"
                value={data.name}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <Input
                label="Subject"
                placeholder="subject"
                name="subject"
                value={data.name}
                onChange={(e) => setData({ ...data, subject: e.target.value })}
              />
            </div>

            <br />
          </div>

          <div className={styles.formThree}>
            <p>message*</p>
            <br />
            <textarea
              value={data.message}
              name="message"
              onChange={handleInputs}
            ></textarea>
          </div>
          <br />

          <div className={styles.formBtn}>
            <button type="submit">SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
