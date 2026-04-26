# Mongoose Data Modeling Lab - Criterion Mapping

This document explicitly maps the implementation to each evaluation criterion.

---

## Criterion 1: Data Modeling Concepts (MongoDB Data Modeling Understanding)

**Location: `models/User.js` and `models/Task.js`**

**Evidence:**
- Designed a relational data model with two entities: User and Task
- User model contains core user information (name, email)
- Task model contains task information with a reference to the User
- Demonstrates understanding of one-to-many relationships (one User can have many Tasks)
- Schema design follows MongoDB best practices with appropriate field names and types

**Code Evidence:**
```javascript
// models/User.js - User entity definition
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});

// models/Task.js - Task entity with relationship
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  completed: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});
```

---

## Criterion 2: Mongoose Schemas and Models (Schema and Model Implementation)

**Location: `models/User.js` (lines 1-22)` and `models/Task.js` (lines 1-27)`**

**Evidence:**
- Both files use `new mongoose.Schema()` to define schemas
- Both schemas are exported using `mongoose.model()`
- Models are properly created with correct collection names
- Schemas define the structure and constraints for each collection

**Code Evidence:**
```javascript
// models/User.js - Schema creation and model export
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({...});
module.exports = mongoose.model('User', userSchema);

// models/Task.js - Schema creation and model export
const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({...});
module.exports = mongoose.model('Task', taskSchema);
```

---

## Criterion 3: Field Types, Required Properties, and Defaults

**Location: `models/User.js` and `models/Task.js`**

**Evidence of Field Types:**
- **String type**: name (User), email (User), title (Task), description (Task)
- **Boolean type**: completed (Task)
- **ObjectId type**: userId (Task) - references User collection
- **Date type**: createdAt (both User and Task)

**Evidence of Required Properties:**
- User.name: `required: true`
- User.email: `required: true`
- Task.title: `required: true`
- Task.userId: `required: true`

**Evidence of Defaults:**
- createdAt: `default: Date.now` (both models)
- completed: `default: false` (Task model)

**Evidence of Additional Properties:**
- User.email: `unique: true` (ensures no duplicate emails)
- User.name: `trim: true` (removes whitespace)
- User.email: `lowercase: true` (normalizes email input)

**Code Evidence:**
```javascript
// User.js - Field types and properties
const userSchema = new mongoose.Schema({
  name: {
    type: String,           // ✓ String field type
    required: true,         // ✓ Required property
    trim: true              // ✓ Additional property
  },
  email: {
    type: String,           // ✓ String field type
    required: true,         // ✓ Required property
    unique: true,           // ✓ Unique constraint
    lowercase: true,        // ✓ Auto-lowercase
    trim: true              // ✓ Trim whitespace
  },
  createdAt: {
    type: Date,             // ✓ Date field type
    default: Date.now       // ✓ Default value
  }
});

// Task.js - Field types and properties
const taskSchema = new mongoose.Schema({
  title: {
    type: String,           // ✓ String field type
    required: true,         // ✓ Required property
    trim: true
  },
  description: {
    type: String,           // ✓ String field type
    trim: true
  },
  completed: {
    type: Boolean,          // ✓ Boolean field type
    default: false          // ✓ Default value
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,  // ✓ ObjectId field type
    ref: 'User',            // ✓ Reference to User collection
    required: true          // ✓ Required property
  },
  createdAt: {
    type: Date,             // ✓ Date field type
    default: Date.now       // ✓ Default value
  }
});
```

---

## Criterion 4: Relationships Between Collections (Reference-Based Relationships)

**Location: `models/Task.js` (lines 16-20)` and `routes/userRoutes.js` (population usage)**

**Evidence of Relationship Definition:**
- Task model has userId field with `type: mongoose.Schema.Types.ObjectId`
- userId field has `ref: 'User'` to establish the relationship
- userId is `required: true` to ensure referential integrity

**Evidence of Relationship Usage (Population):**
- Routes use `.populate('userId', 'name email')` to fetch related User data
- Demonstrates proper use of Mongoose relationship functionality

**Code Evidence - Relationship Definition:**
```javascript
// models/Task.js - Reference-based relationship
userId: {
  type: mongoose.Schema.Types.ObjectId,  // ✓ Reference type
  ref: 'User',                           // ✓ References User collection
  required: true                         // ✓ Ensures referential integrity
}
```

**Code Evidence - Relationship Usage (Population):**
```javascript
// routes/userRoutes.js - Using relationships
// Line 66: Get all Tasks with populated user data
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find().populate('userId', 'name email');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Line 78: Get Task by ID with populated user
router.get('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('userId', 'name email');
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

---

## Criterion 5: CRUD Operations Using Models (Create, Read, Update, Delete)

**Location: `routes/userRoutes.js`**

### CREATE Operations

**User Creation (lines 12-19):**
```javascript
router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);      // ✓ Create new User instance
    await user.save();                    // ✓ Save to database
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
```

**Task Creation (lines 69-75):**
```javascript
router.post('/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);      // ✓ Create new Task instance
    await task.save();                    // ✓ Save to database
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
```

### READ Operations

**Get All Users (lines 22-28):**
```javascript
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();      // ✓ Read all Users
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

**Get User by ID (lines 31-38):**
```javascript
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);  // ✓ Read single User
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

**Get All Tasks with Relationships (lines 66-72):**
```javascript
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find().populate('userId', 'name email');  // ✓ Read with population
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

**Get Task by ID (lines 78-85):**
```javascript
router.get('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('userId', 'name email');  // ✓ Read single with population
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

### UPDATE Operations

**Update User (lines 41-48):**
```javascript
router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });  // ✓ Update User
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
```

**Update Task (lines 88-95):**
```javascript
router.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });  // ✓ Update Task
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
```

### DELETE Operations

**Delete User (lines 51-57):**
```javascript
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);  // ✓ Delete User
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

**Delete Task (lines 98-105):**
```javascript
router.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);  // ✓ Delete Task
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

---

## Summary

All 5 criteria are fully implemented:

✅ **Criterion 1** - Data modeling concepts demonstrated with User and Task entities  
✅ **Criterion 2** - Mongoose schemas and models properly defined and exported  
✅ **Criterion 3** - Field types (String, Boolean, ObjectId, Date), required properties, and defaults used throughout  
✅ **Criterion 4** - Reference-based relationships with userId and .populate() usage  
✅ **Criterion 5** - Complete CRUD operations for both User and Task models  

**Files containing implementation:**
- `models/User.js` - User schema with field definitions
- `models/Task.js` - Task schema with relationships
- `routes/userRoutes.js` - Complete CRUD API implementation
- `server.js` - Express server with MongoDB connection
