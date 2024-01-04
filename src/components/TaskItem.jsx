import '../styles/TaskItem.css'
import React, { useState } from 'react';

const TaskItem = ({ task, handleComplete, handleDelete }) => {
  const [completed, setCompleted] = useState(false);

  const [clicked, setClicked] = useState(false);
  const complete = () => {
      setClicked(!clicked);
  };

  return (
    <li className='tasklist'>
      <p style={{ textDecoration: clicked ? 'line-through' : 'none' }} className='task'>{task.name}</p>
      <div className='tasklist-btns'>
        <button onClick={() => complete()} className='btn-completado'>✔</button>
        <button onClick={() => handleDelete()} className='btn-borrar'>X</button>
      </div>
    </li>
  );
};

export default TaskItem;