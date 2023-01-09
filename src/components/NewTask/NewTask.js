import React, { useState } from "react";
import styles from "./NewTask.module.css";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const addTaskHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString(),
    };
    props.onAddTask(taskData);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  }
  return (
    <div className={styles["new-task"]}>
      {!isEditing && (
        <button type="button" onClick={startEditingHandler}>
          Add Task
        </button>
      )}
      {isEditing && <TaskForm onAddNewTask={addTaskHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewTask;
