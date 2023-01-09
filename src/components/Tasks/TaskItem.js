import Card from '../UI/Card';
import styles from './TaskItem.module.css';

const TaskItem = (props) => {
  const updateTaskHandler = () => {
    props.onUpdate(props.id);
  }
  const taskTitleClasses = props.completed ? `${styles["task-item"]} ${styles["completed"]}` : styles["task-item"];
  return(
  <Card className={taskTitleClasses}>
    <div className={styles["task-title"]}>{props.title}</div>
    {!props.completed && <button className={styles["complete-task"]} onClick={updateTaskHandler}>Done </button>}
  </Card>
)};

export default TaskItem;
