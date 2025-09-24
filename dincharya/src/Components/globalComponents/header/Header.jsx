import React, { useState } from "react";
import styles from "./header.module.css";

function Header() {

  const [currentView, setCurrentView] = useState("signup"); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>दिनचर्या</h1>

      <nav className={styles.nav}>
        {!isLoggedIn ? (
          <>
            <button
              className={`${styles.navButton} ${
                currentView === "login" ? styles.active : ""
              }`}
              onClick={() => setCurrentView("login")}
            >
              Login
            </button>
           
          </>
        ) : (
          <>
            <button
              className={`${styles.navButton} ${
                currentView === "todo" ? styles.active : ""
              }`}
              onClick={() => setCurrentView("todo")}
            >
              My Tasks
            </button>
            <button
              className={styles.navButton}
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
