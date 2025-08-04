// src/App.js
import React, { useEffect, useState } from 'react';
import * as api from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.fetchTasks()
      .then(setTasks)
      .catch(err => setError(err.message));
  }, []);

  const handleCreate = async title => {
    try {
      const newTask = await api.createTask(title);
      setTasks(ts => [...ts, newTask]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleToggle = async (id, completed) => {
    try {
      const task = tasks.find(t => t.id === id);
      const updated = await api.updateTask(id, {
        title: task.title,
        completed: completed
      });
      setTasks(ts => ts.map(t => (t.id === id ? updated : t)));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async id => {
    try {
      await api.deleteTask(id);
      setTasks(ts => ts.filter(t => t.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '0 1rem' }}>
      <h1>Task Manager</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <TaskForm onCreate={handleCreate} />
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}
