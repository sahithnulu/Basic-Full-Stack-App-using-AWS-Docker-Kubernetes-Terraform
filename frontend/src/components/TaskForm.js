// src/components/TaskForm.js
import React, { useState } from 'react';

export default function TaskForm({ onCreate }) {
  const [title, setTitle] = useState('');

  const submit = e => {
    e.preventDefault();
    const text = title.trim();
    if (!text) return;
    onCreate(text);
    setTitle('');
  };

  return (
    <form onSubmit={submit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="New task"
        style={{ padding: '0.5rem', width: '80%' }}
      />
      <button type="submit" style={{ padding: '0.5rem', marginLeft: '0.5rem' }}>
        Add
      </button>
    </form>
  );
}
