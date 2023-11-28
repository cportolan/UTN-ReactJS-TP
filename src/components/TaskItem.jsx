import '../styles/TaskItem.css'
import React, { useState } from 'react';

const TaskItem = ({ task, handleComplete, handleDelete }) => {
  const [completed, setCompleted] = useState(false);

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }} className='tasklist'>
      <p className='task'>{task.name}</p>
      <button onClick={() => handleComplete()} className='btn-completado'>✔</button>
      <button onClick={() => handleDelete()} className='btn-borrar'>X</button>
    </li>
  );
};

export default TaskItem;