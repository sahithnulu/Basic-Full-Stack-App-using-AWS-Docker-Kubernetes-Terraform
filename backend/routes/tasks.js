// backend/routes/tasks.js
import express from 'express';
import { initDb } from '../db.js';

const router = express.Router();
let dbPromise = initDb();

router.get('/', async (req, res) => {
  try {
    const db = await dbPromise;
    const rows = await db.all('SELECT id, title, completed FROM tasks');
    res.json(rows.map(r => ({ ...r, completed: Boolean(r.completed) })));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const db = await dbPromise;
    const row = await db.get(
      'SELECT id, title, completed FROM tasks WHERE id = ?', 
      req.params.id
    );
    if (!row) return res.status(404).json({ error: 'Task not found' });
    res.json({ ...row, completed: Boolean(row.completed) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title required' });
  try {
    const db = await dbPromise;
    const result = await db.run(
      'INSERT INTO tasks (title) VALUES (?)', 
      title
    );
    res.status(201).json({
      id: result.lastID,
      title,
      completed: false
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const { title, completed } = req.body;
  try {
    const db = await dbPromise;
    const result = await db.run(
      'UPDATE tasks SET title = ?, completed = ? WHERE id = ?', 
      title, completed ? 1 : 0, req.params.id
    );
    if (result.changes === 0)
      return res.status(404).json({ error: 'Task not found' });
    const row = await db.get(
      'SELECT id, title, completed FROM tasks WHERE id = ?', 
      req.params.id
    );
    res.json({ ...row, completed: Boolean(row.completed) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const db = await dbPromise;
    const result = await db.run(
      'DELETE FROM tasks WHERE id = ?', 
      req.params.id
    );
    if (result.changes === 0)
      return res.status(404).json({ error: 'Task not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
