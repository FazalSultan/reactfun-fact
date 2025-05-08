import React from "react";
import styles from "./IconImage.module.css";

export default function IconImage() {
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.reacticon}>
          <header>
            <img
              src="src/assets/react.svg"
              className={styles.navLogoIcon}
              alt="react logo"
            />
            <nav className={styles.navItems}>
              <ul className={styles.navList}>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </header>
        </div>
        <div className={styles.funfact}>
          <h2> Fun facts about React</h2>
          <ul>
            <li>Was first release in 2013</li>
            <li>Was orignally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>is maintained by Meta</li>
            <li>power thousands of enterprise apps, includig mobile apps</li>
          </ul>
        </div>
      </div>
    </>
  );
}
