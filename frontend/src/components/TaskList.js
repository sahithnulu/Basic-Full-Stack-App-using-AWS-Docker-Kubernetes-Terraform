// src/components/TaskList.js
import React from 'react';

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) return <p>No tasks yet.</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map(t => (
        <li
          key={t.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '0.5rem'
          }}
        >
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => onToggle(t.id, !t.completed)}
          />
          <span
            style={{
              textDecoration: t.completed ? 'line-through' : 'none',
              flexGrow: 1,
              marginLeft: '0.5rem'
            }}
          >
            {t.title}
          </span>
          <button onClick={() => onDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
