// backend/server.js
import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/tasks.js';
import { initDb } from './db.js';

const app = express();
app.use(cors(), express.json());
app.use('/api/tasks', taskRoutes);

(async () => {
  await initDb();
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Server on ${PORT}`));
})();
