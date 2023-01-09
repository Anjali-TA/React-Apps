import { useState } from "react";
import Card from "../UI/Card";
import TaskFilter from "./TaskFilter";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

const TaskList = (props) => {
  const [filteredTaskStatus, setFilteredTaskStatus] = useState("all");
  let filteredTasks = props.tasks;

  const filterChangeHandler = (status) => {
    setFilteredTaskStatus(status);
  };

  if (filteredTaskStatus === "completed") {
    filteredTasks = props.tasks.filter((task) => task.completed === true);
  } else if (filteredTaskStatus === "todo") {
    filteredTasks = props.tasks.filter((task) => task.completed === false);
  } else {
    filteredTasks = props.tasks;
  }

  return (
    <Card className={styles["task-list"]}>
      <TaskFilter onChangeFilter={filterChangeHandler} />
      {filteredTasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
            onUpdate={props.onUpdateStatus}
          />
        );
      })}
    </Card>
  );
};
export default TaskList;
