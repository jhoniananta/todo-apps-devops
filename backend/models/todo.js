import express from 'express';
import { 
  passwordConfig as SQLAuthentication
} from '../config.js';
import { createDatabaseConnection } from '../config/database.js';

const router = express.Router();
router.use(express.json());

const database = await createDatabaseConnection(SQLAuthentication);

router.get('/priorities', async (req, res) => {
  try {
    // Return a list of priorities
    const priorities = await database.readAllPriorities();
    console.log(`priorities: ${JSON.stringify(priorities)}`);
    res.status(200).json(priorities);
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});


router.get('/priorities/:id', async (req, res) => {
  try {
    // Get the priorities with the specified ID
    const prioritiesId = req.params.id;
    console.log(`prioritiesId: ${prioritiesId}`);
    if (prioritiesId) {
      const result = await database.readPriorities(prioritiesId);
      console.log(`priorities: ${JSON.stringify(result)}`);
      res.status(200).json(result);
    } else {
      res.status(404);
    }
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});

router.get('/categories', async (req, res) => {
  try {
    // Return a list of persons
    const categories = await database.readAllCategories();
    console.log(`categories: ${JSON.stringify(categories)}`);
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});


router.get('/categories/:id', async (req, res) => {
  try {
    // Get the person with the specified ID
    const categoriesId = req.params.id;
    console.log(`categoriesId: ${categoriesIdId}`);
    if (categoriesIdId) {
    const result = await database.readPriorities(categoriesIdId);
      console.log(`categories: ${JSON.stringify(result)}`);
      res.status(200).json(result);
    } else {
      res.status(404);
    }
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});

export default router;