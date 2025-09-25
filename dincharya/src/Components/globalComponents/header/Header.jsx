import React, { useState } from "react";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const [currentView, setCurrentView] = useState("signup");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setCurrentView("login");
    navigate("/login");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView("signup");

    localStorage.removeItem("token");
    navigate("/login");
  };

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
              onClick={handleLoginClick}
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
            <button className={styles.navButton} onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
