import express from 'express';
import { 
    passwordConfig as SQLAuthentication, 
    noPasswordConfig as PasswordlessConfig 
  } from './test_connection.js';
import { createDatabaseConnection } from './config/database.js';
const router = express.Router();
router.use(express.json());
const database = await createDatabaseConnection(SQLAuthentication);

router.get('/', async (req, res) => {
    try {
      // Return a list of tasks
  
      const tasks = await database.readAll();
      console.log(`tasks: ${JSON.stringify(tasks)}`);
      res.status(200).json(tasks);
    } catch (err) {
      res.status(500).json({ error: err?.message });
    }
  });

router.post('/', async (req, res) => {
    try {
      // add a tasks
      const tasks = req.body;
      console.log(`tasks: ${JSON.stringify(tasks)}`);
      const rowsAffected = await database.create(tasks);
      res.status(201).json({ rowsAffected });
    } catch (err) {
      res.status(500).json({ error: err?.message });
    }
  });

router.get('/:id', async (req, res) => {
    try {
      // Get the tasks with the specified ID
      const tasksId = req.params.id;
      console.log(`tasksId: ${tasksId}`);
      if (tasksId) {
        const result = await database.read(tasksId);
        console.log(`tasks: ${JSON.stringify(result)}`);
        res.status(200).json(result);
      } else {
        res.status(404);
      }
    } catch (err) {
      res.status(500).json({ error: err?.message });
    }
  });

router.delete('/:id', async (req, res) => {
    try {
      // Delete the tasks with the specified ID
      const tasksId = req.params.id;
      console.log(`tasksId: ${tasksId}`);
  
      if (!tasksId) {
        res.status(404);
      } else {
        const rowsAffected = await database.delete(tasksId);
        res.status(204).json({ rowsAffected });
      }
    } catch (err) {
      res.status(500).json({ error: err?.message });
    }
  });
  
  export default router;
  

  

