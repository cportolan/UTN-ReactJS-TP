import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Footer from './Footer';
import Home from './Home'

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('Lista de tareas actualizada:', tasks);
  }, [tasks]);

  const handleComplete = (taskId) => {
    setTasks(prevTasks => {
      return prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: true } : task
      );
    });
  };

  const handleDelete = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const addTask = (newTask) => {
    setTasks(prevTasks => [
      ...prevTasks,
      { id: Date.now(), name: newTask, completed: false }
    ]);
  };

  return (
    <div className='App'>
      <Home />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} handleComplete={handleComplete} handleDelete={handleDelete} />
      <Footer />
    </div>
  );
};

export default App;