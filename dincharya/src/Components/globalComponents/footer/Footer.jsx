import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.tagline}>
          <p>आपका सहयोगी, जो दिनचर्या को सँवारे और कामयाबी की राह आसान बनाए ।</p>
        </div>
        <p className={styles.copyright}>
          &copy; 2025 दिनचर्या. All rights reserved. Made for better
          productivity
        </p>
      </div>
    </footer>
  );
};

export default Footer;
