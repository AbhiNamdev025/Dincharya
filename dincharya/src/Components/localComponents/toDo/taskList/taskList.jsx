import React, { useEffect, useState } from "react";
import AddTask from "../addTask/addTask";
import TaskItem from "../taskItem/taskItem";
import styles from "./taskList.module.css";
import { toast } from "react-toastify";

const deleteTaskUrl = import.meta.env.VITE_DELETE_TASK_URL;
const updateTaskUrl = import.meta.env.VITE_UPDATE_TASK_URL;
const findTaskUrl = import.meta.env.VITE_FIND_TASK_URL;

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState();
  const [editTask, setEditTask] = useState("");

  const fetchTasks = async () => {
    try {
      const response = await fetch(`${findTaskUrl}`);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      Response.json("prblm in fetching tasks:", error);
      toast.error("Failed to fetch tasks.");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${deleteTaskUrl}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.warning("Task deleted successfully!");
        fetchTasks();
      } else {
        toast.error("failed to delete task.");
      }
    } catch (error) {
      Response.json("issue in deleting task:", error);
      toast.error("Failed to delete a task.");
    }
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
    setEditTask(task.task);
    setIsFormOpen(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!editTask) {
      toast.info("Please enter a task!");
    }

    try {
      const response = await fetch(`${updateTaskUrl}/${selectedTask._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: editTask.trim() }),
      });

      if (response.ok) {
        toast.info("Task updated successfully!");
        onClose();
        fetchTasks();
      } else {
        toast.error("Failed to update task.");
      }
    } catch (error) {
      Response.json("issue in updating task:", error);
      toast.error("Failed to update task.");
    }
  };

  const onClose = () => {
    setIsFormOpen(false);
    setSelectedTask();
    setEditTask("");
  };

  const newTaskAdded = () => {
    fetchTasks();
  };

  return (
    <div className={styles.todoContainer}>
      <AddTask onAdd={newTaskAdded} />

      <div className={styles.tasks}>
        <h3 className={styles.tasksTitle}>आपके कार्य</h3>

        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}

        {tasks.length === 0 && (
          <p className={styles.emptyMessage}>
            No tasks yet. Add a task to get started!
          </p>
        )}

        {isFormOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <span className={styles.closeBtn} onClick={onClose}>
                X
              </span>
              <h3>Edit Task</h3>
              <form onSubmit={handleUpdate} className={styles.editForm}>
                <input
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                  className={styles.input}
                  placeholder="Edit your task..."
                />
                <button type="submit" className={styles.saveButton}>
                  Update Task
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
