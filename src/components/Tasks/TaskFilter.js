import React from 'react';
import styles from './TaskFilter.module.css';

const TaskFilter = (props) => {
  const dropDownChangeHandler = (event)=>{
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className={styles['task-filter']}>
      <div className={styles['task-filter__control']}>
        <label>Filter by status</label>
        <select onChange={dropDownChangeHandler} value={props.selected}>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='todo'>ToDo</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilter;