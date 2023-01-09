import React, { useState } from "react";
import styles from "./TaskForm.module.css";

const TaskForm = (props) => {
  const [task, setTask] = useState("");
  const [enteredTaskIsTouched, setEnteredTaskIsTouched] = useState(false);
  const enteredTaskIsValid = task.trim() !== "";
  const enteredTaskIsInvalid = !enteredTaskIsValid && enteredTaskIsTouched;

  const taskChangeHandler = (event) => {
    setTask(event.target.value);
  };

  const taskBlurHandler = (event) => {
    setEnteredTaskIsTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredTaskIsTouched(true);
    if(!enteredTaskIsValid){
      return;
    }
    const taskData = {
      title: task,
      completed: false,
    };
    props.onAddNewTask(taskData);
    setTask("");
    setEnteredTaskIsTouched(false);
    props.onCancel();
  };

  const taskInputClasses = enteredTaskIsInvalid
    ? `${styles['new-task__control']} ${styles.invalid}`
    : styles['new-task__control'];
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={styles['new-task__controls']}>
          <div className={taskInputClasses}>
            <label>My Task</label>
            <input
              type="text"
              value={task}
              onChange={taskChangeHandler}
              onBlur={taskBlurHandler}
            />
          </div>
          {enteredTaskIsInvalid && (
            <p className={styles['error-text']}>Task must not be empty</p>
          )}
        </div>
        <div className={styles['new-task__actions']}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
