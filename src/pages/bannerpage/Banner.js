import React from "react";
import styles from "../bannerpage/banner.module.css";
import banner from "../../assets/images/banner.jpg";
import arrow from "../../assets/images/uparrow.jpg";
import leafes from "../../assets/images/leafes.png";
import horse from "../../assets/images/horse.jpg";
import NavBar from "../navbar/NavBar";

const Banner = () => {
  return (
    <div className={styles.bannerMainContainerStyle}>
      <section className={styles.banner}>
        <img src={banner} className={styles.imgStyle} />
      </section>

      <div
        className={styles.upArrow}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={arrow} height={40} width={40} />
      </div>

      <section id="about" className={styles.content}>
        <div className={styles.partOne}>
          <div className={styles.aboutOne}>
            <h1>About Us</h1>
          </div>

          <div className={styles.leafGroup}>
            <span className={styles.line}></span>{" "}
            <img src={leafes} width={50} />
            <span className={styles.line}></span>
          </div>
        </div>

        <div className={styles.partTwo}>
          <div className={styles.horse}>
            <img src={horse} />
          </div>
          <div className={styles.horseText}>
            <h2>WELCOME TO OUR FARM HOUSE</h2>
            <br />
            <p>
              PN Farm House is an excellent opportunity to enjoy the real
              experience with nature in a fascinating location.
            </p>
            <p>
              The sights, breezes, sounds and smells of the late evenings are
              indeed very soothing.
            </p>
            <p>
              A simple life with your family crew inside a farm will be awesome!
              Nothing can be more relaxing than to be here including the
              driveway that leads to our Farm house.
            </p>
            <p>
              Stay in Independent, Homely, Farm Villa inside all green coco
              farms for your own use run by a family, in the backwaters of
              Ambarampalayam river.
            </p>
            <p>
              It's a get away place where one can be as close as possible to
              nature and have a unique experience.
            </p>
            <p>
              {" "}
              We give you pleasant night, that will be more soothing than a
              sleeping pill{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
