import '../styles/TaskForm.css'
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} className='form-input'/>
      <button type="submit" className='form-button'>Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;