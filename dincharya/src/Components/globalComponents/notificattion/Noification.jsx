import React from "react";
import styles from "./notification.module.css";

function Notification() {
  return (
    <>
      <div className={styles.popupContainer}>
        <div className={styles.popups}>
          <div className={`${styles.success} ${styles.popup}`}>Task Added✅</div>
          <div className={`${styles.error} ${styles.popup}`}>Please Enter A Task ⚠️</div>
          <div className={`${styles.edited} ${styles.popup}`}>Edited Successfully🖊</div>
          <div className={`${styles.deleted} ${styles.popup}`}>Deleted Successfully🚮</div>
        </div>
      </div>
    </>
  );
}

export default Notification;
