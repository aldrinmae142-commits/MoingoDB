/**
 * CRITERION 5: CRUD Operations Implementation
 * This file contains all CRUD (Create, Read, Update, Delete) operations
 * for both User and Task models using Mongoose.
 * Also demonstrates Criterion 4: Using relationships with populate()
 */

const express = require('express');
const User = require('../models/User');
const Task = require('../models/Task');

const router = express.Router();

// ============================================================================
// USER CRUD OPERATIONS
// ============================================================================

/**
 * CRITERION 5: CREATE Operation (User)
 * POST /api/users
 * Creates a new User document and saves it to the database
 */
router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);     // CRITERION 5: Create new instance
    await user.save();                   // CRITERION 5: Save to database
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * CRITERION 5: READ Operation (User) - Get All
 * GET /api/users
 * Retrieves all User documents from the database
 */
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();     // CRITERION 5: Read all documents
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * CRITERION 5: READ Operation (User) - Get One
 * GET /api/users/:id
 * Retrieves a specific User document by ID
 */
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);  // CRITERION 5: Read by ID
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * CRITERION 5: UPDATE Operation (User)
 * PUT /api/users/:id
 * Updates a User document with new data
 */
router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(  // CRITERION 5: Update operation
      req.params.id,
      req.body,
      { new: true, runValidators: true }  // Returns updated doc, validates against schema
    );
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * CRITERION 5: DELETE Operation (User)
 * DELETE /api/users/:id
 * Removes a User document from the database
 */
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);  // CRITERION 5: Delete
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================================================
// TASK CRUD OPERATIONS (with Relationship Population)
// ============================================================================

/**
 * CRITERION 5: CREATE Operation (Task)
 * POST /api/tasks
 * Creates a new Task document
 */
router.post('/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);     // CRITERION 5: Create new instance
    await task.save();                   // CRITERION 5: Save to database
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * CRITERION 5 + CRITERION 4: READ Operation (Task) - Get All with Relationships
 * GET /api/tasks
 * Retrieves all Task documents and populates related User data
 * Demonstrates use of relationships: populate() fetches User data for each Task
 */
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate('userId', 'name email');  // CRITERION 4: Populate relationship
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * CRITERION 5 + CRITERION 4: READ Operation (Task) - Get One with Relationships
 * GET /api/tasks/:id
 * Retrieves a specific Task and populates related User data
 */
router.get('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
      .populate('userId', 'name email');  // CRITERION 4: Populate relationship
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * CRITERION 5: UPDATE Operation (Task)
 * PUT /api/tasks/:id
 * Updates a Task document
 */
router.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(  // CRITERION 5: Update operation
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * CRITERION 5: DELETE Operation (Task)
 * DELETE /api/tasks/:id
 * Removes a Task document from the database
 */
router.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);  // CRITERION 5: Delete
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Tasks by User ID
router.get('/users/:userId/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.params.userId }).populate('userId', 'name email');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;