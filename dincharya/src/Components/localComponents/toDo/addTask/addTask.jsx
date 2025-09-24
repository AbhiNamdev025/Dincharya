import React, { useState } from "react";
import styles from "./addtask.module.css";
import { toast } from "react-toastify";

const AddTask = ({ onAdd }) => {
  const [newTask, setNewTask] = useState({ task: "" });
  const addTaskUrl = import.meta.env.VITE_ADD_TASK_URL;

  const changeHandler = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!newTask.task) {
      toast.error("Please enter a task!");
    } else {
      try {
        const response = await fetch(`${addTaskUrl}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTask),
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
          toast.success("Task added successfully ✅ ");
          setNewTask({ task: "" });

          if (onAdd) {
            onAdd();
          }
        } else {
          toast.error("Failed to add task.");
        }
      } catch (error) {
        console.error("error in adding task:", error);
        toast.error("failed to add task.");
      }
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.newTask}>
        <input
          type="text"
          placeholder="Task To Be Done.."
          className={styles.input}
          name="task"
          value={newTask.task}
          onChange={changeHandler}
        />
        <button type="submit" className={styles.addButton}>
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTask;
