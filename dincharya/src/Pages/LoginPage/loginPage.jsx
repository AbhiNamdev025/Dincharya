import React from "react";
import styles from "./loginPage.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import Signup from "../../Components/localComponents/Forms/SignUpForm/SignUpForm";
import Login from "../../Components/localComponents/Forms/LoginFrom/LoginForm";

function LoginPage() {
  const location = useLocation();

  return (
    <>
      <div className={styles.app}>
        <div className={styles.container}>
          {location.pathname === "/signup" ? <Signup /> : <Login />}
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}

export default LoginPage;
