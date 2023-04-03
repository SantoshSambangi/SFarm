import styles from "../navbar/navbar.module.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);

  const Handler = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.navMainContainerStyle}>
      <header className={styles.header}>
        <img src={logo} />

        <ul className={styles.links}>
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <li>HOME</li>
          </Link>
          <Link
            to="/about"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <li>ABOUT</li>
          </Link>
          <Link
            to="/gallery"
            onClick={() =>
              document
                .getElementById("gallery")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <li>GALLERY</li>
          </Link>
          <Link
            to="/contact"
            onClick={() =>
              document
                .getElementById("form")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <li>CONTACT</li>
          </Link>
          <Link to="/reserve" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <li>RESERVE</li>
          </Link>
        </ul>

        <div className={styles.hamburger} onClick={Handler}>
          {toggle ? <FaBars size={25} /> : <AiOutlineClose size={25} />}
        </div>
      </header>

      <ul className={toggle ? styles.links2 : styles.mobileLinks}>
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <li>HOME</li>
        </Link>
        <Link
          to="/about"
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <li>ABOUT</li>
        </Link>
        <Link
          to="/gallery"
          onClick={() =>
            document
              .getElementById("gallery")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <li>GALLERY</li>
        </Link>

        <Link
          to="/contact"
          onClick={() =>
            document
              .getElementById("form")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <li>CONTACT</li>
        </Link>

        <Link to="/reserve">
          <li>RESERVE</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
