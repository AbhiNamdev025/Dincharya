import React from 'react';
import styles from './taskItem.module.css';

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <div className={styles.task}>
      <span className={styles.taskName}>{task.task}</span>
      <div className={styles.taskActions}>
        <button 
          className={styles.editButton}
          onClick={() => onEdit(task)}
        >
          ✏️
        </button>
        <button 
          className={styles.deleteButton}
          onClick={() => onDelete(task._id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskItem;