import React from 'react';
import './Task.css'
const Task = ({ task, priority, status, onEdit, onDelete}) => {
  return (
    <div class='taskContainer'>
      <div class='taskDetails'>
        <span class = 'task'>
          <p class='taskText'>Task</p>{task}
        </span>
        <span class={priority === 'High' ? 'highPriority' : priority === 'Medium' ? 'mediumPriority' : 'lowPriority'}><p class='taskText'>Priority</p>{priority}</span>
        <span class ='status'>{status}</span>
      </div>
      <div class='actions'>
        <button onClick={onEdit} class='editButton'>✏️</button>
        <button onClick={onDelete} class='deleteButton'>🗑️</button>
      </div>
    </div>
  );
};


export default Task;
