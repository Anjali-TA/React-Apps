import { BsCheckAll, BsTrashFill } from "react-icons/bs";
import Card from '../UI/Card';
import styles from './TaskItem.module.css';

const TaskItem = (props) => {
  const updateTaskHandler = () => {
    props.onUpdate(props.id);
  }

  const deleteTaskHandler = () =>{
    props.onDelete(props.id);
  }
  const taskTitleClasses = props.completed ? `${styles["task-item"]} ${styles["completed"]}` : styles["task-item"];
  return(
  <Card className={taskTitleClasses}>
    <div className={styles["task-title"]}>{props.title}</div>
    {/* <input value={props.title}/> */}
    {!props.completed && <BsCheckAll title="done" style={{color: 'green', fontSize: '25px',cursor:'pointer',marginTop:'15px'}} onClick={updateTaskHandler}/> }
    <BsTrashFill title="delete" style={{color: 'red', fontSize: '25px',cursor:'pointer',marginTop:'15px'}} onClick={deleteTaskHandler}/>
  </Card>
)};

export default TaskItem;
