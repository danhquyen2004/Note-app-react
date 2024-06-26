import React, { useState } from 'react';
import Task from './components/Task';
import './App.css'
import Header from './components/Header';
import Form from './components/Form';
const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Go to gym', priority: 'High', status: 'To Do' },
    { id: 2, task: 'Read a book', priority: 'Low', status: 'Done' },
    { id: 3, task: 'Go to market', priority: 'Medium', status: 'In Progress' },
    // other tasks
  ]);

  const handleEdit = (id) => {
    // handle edit task logic
    console.log(`Edit task with id ${id}`);
  };

  const handleDelete = (id) => {
    // handle delete task logic
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <Header></Header>
      {tasks.map(task => (
        <Task 
          key={task.id}
          task={task.task}
          priority={task.priority}
          status={task.status}
          onEdit={() => handleEdit(task.id)}
          onDelete={() => handleDelete(task.id)}
        />
      ))}
      <Form></Form>
    </div>
  );
};

export default App;
