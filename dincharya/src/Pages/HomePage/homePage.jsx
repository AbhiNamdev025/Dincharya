import React from "react";
import styles from "./homePage.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskList from "../../Components/localComponents/toDo/taskList/taskList";
import Footer from "../../Components/globalComponents/footer/footer";
import Header from "../../Components/globalComponents/header/Header";

function HomePage() {
  return (
    <>
      <div className={styles.app}>
        <div className={styles.container}>
          <Header />
          <TaskList />
          <Footer />
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

export default HomePage;
