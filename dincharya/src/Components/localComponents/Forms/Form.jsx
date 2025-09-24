import React, { useState } from "react";
import styles from "./form.module.css";

function Form() {
  const [currentForm, setCurrentForm] = useState("signup");




  

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.Form}>
          <h2>{currentForm === "login" ? "Login" : "Sign Up"} to दिनचर्या</h2>

          <form className={styles.form}>
            {currentForm === "signup" && (
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className={styles.input}
                  name="name"
                  required
                />
              </div>
            )}
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Email Address"
                className={styles.input}
                name="email"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
                name="password"
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              {currentForm === "login" ? "Login" : "Sign Up"}
            </button>
          </form>

          <p className={styles.switchText}>
            {currentForm === "login"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <span
              className={styles.switchLink}
              onClick={() =>
                setCurrentForm(currentForm === "login" ? "signup" : "login")
              }
            >
              {currentForm === "login" ? "Sign up here" : "Login here"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Form;
