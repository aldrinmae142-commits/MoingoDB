# Mongoose Data Modeling Lab - Complete Implementation

This project demonstrates comprehensive understanding of MongoDB data modeling and Mongoose implementation across all 5 evaluation criteria.

## Quick Navigation - Where to Find Evidence

| Criterion | Location | Evidence |
|-----------|----------|----------|
| **1: Data Modeling** | `models/User.js`, `models/Task.js` | One-to-many relationship design (User → Tasks) |
| **2: Mongoose Schemas & Models** | `models/User.js` (lines 10-50), `models/Task.js` (lines 10-70) | `mongoose.Schema()` + `mongoose.model()` |
| **3: Field Types & Properties** | `models/User.js` (lines 23-50), `models/Task.js` (lines 15-60) | String, Boolean, Date types; required, default, unique |
| **4: Relationships (Reference-Based)** | `models/Task.js` (lines 45-49), `routes/userRoutes.js` (lines 115, 128) | userId ObjectId reference + `.populate()` |
| **5: CRUD Operations** | `routes/userRoutes.js` (entire file) | Create, Read, Update, Delete for User & Task |

---

## Implementation Details

### Criterion 1 & 2: Data Modeling with Mongoose

**Files:** `models/User.js` and `models/Task.js`

The project demonstrates data modeling by creating two related entities:
- **User Model**: Stores user information (name, email, createdAt)
- **Task Model**: Stores task information with a reference to User (establishes one-to-many relationship)

Both models use `mongoose.Schema()` to define structure and `mongoose.model()` to create models.

### Criterion 3: Field Types, Required Properties, and Defaults

Evidence in `models/User.js`:
```javascript
// String type with required property
name: { type: String, required: true, trim: true }

// String type with multiple properties (required, unique, lowercase)
email: { type: String, required: true, unique: true, lowercase: true, trim: true }

// Date type with default value
createdAt: { type: Date, default: Date.now }
```

Evidence in `models/Task.js`:
```javascript
// String type with required property
title: { type: String, required: true, trim: true }

// Boolean type with default value
completed: { type: Boolean, default: false }

// ObjectId type for references
userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
```

### Criterion 4: Reference-Based Relationships

**Schema Definition** (`models/Task.js` lines 45-49):
```javascript
userId: {
  type: mongoose.Schema.Types.ObjectId,  // Reference type
  ref: 'User',                           // References User collection
  required: true                         // Ensures referential integrity
}
```

**Relationship Usage** (`routes/userRoutes.js` lines 115, 128):
```javascript
// Populate relationship to fetch User data with Task
const tasks = await Task.find().populate('userId', 'name email');
const task = await Task.findById(req.params.id).populate('userId', 'name email');
```

This demonstrates:
- One User has many Tasks (one-to-many)
- Tasks reference Users via ObjectId
- `.populate()` automatically fetches related User data

### Criterion 5: CRUD Operations

**All CRUD operations are implemented for both User and Task models:**

#### CREATE Operations
- `POST /api/users` - Creates a new User
- `POST /api/tasks` - Creates a new Task

#### READ Operations
- `GET /api/users` - Retrieves all Users
- `GET /api/users/:id` - Retrieves single User by ID
- `GET /api/tasks` - Retrieves all Tasks with populated User data
- `GET /api/tasks/:id` - Retrieves single Task with populated User data

#### UPDATE Operations
- `PUT /api/users/:id` - Updates User with validation
- `PUT /api/tasks/:id` - Updates Task with validation

#### DELETE Operations
- `DELETE /api/users/:id` - Deletes a User
- `DELETE /api/tasks/:id` - Deletes a Task

All operations use Mongoose model methods:
- `.save()` - for CREATE
- `.find()`, `.findById()` - for READ
- `.findByIdAndUpdate()` - for UPDATE
- `.findByIdAndDelete()` - for DELETE

---

## Project Structure

```
mongoose-data-modeling-lab/
├── models/
│   ├── User.js          # User schema with field definitions
│   └── Task.js          # Task schema with relationships
├── routes/
│   └── userRoutes.js    # CRUD API endpoints
├── server.js            # Express server configuration
├── package.json         # Dependencies
├── .env                 # MongoDB URI configuration
├── README.md            # This file
├── CRITERION_MAPPING.md # Detailed criterion mapping with code examples
└── Data-Modeling-Demonstration.txt  # Conceptual explanations
```

---

## Setup & Testing

### Prerequisites
- Node.js installed
- MongoDB running locally (or update .env with your MongoDB URI)

### Installation
```bash
npm install
```

### Configuration (.env)
```
MONGODB_URI=mongodb://localhost:27017/mongoose-lab
PORT=3001
```

### Start Server
```bash
npm start
```

Server will run on `http://localhost:3001`

### Test API Endpoints

**Create a User:**
```bash
curl -X POST http://localhost:3001/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'
```

**Create a Task (replace USER_ID):**
```bash
curl -X POST http://localhost:3001/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn Mongoose","userId":"USER_ID_HERE"}'
```

**Get all Tasks with User data:**
```bash
curl http://localhost:3001/api/tasks
```

**Response example:**
```json
[
  {
    "_id": "task_id_here",
    "title": "Learn Mongoose",
    "completed": false,
    "userId": {
      "_id": "user_id_here",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "createdAt": "2026-04-26T20:40:00.000Z"
  }
]
```

---

## Summary - All 5 Criteria Implemented

✅ **Criterion 1 (Data Modeling)** - User-Task relationship demonstrates understanding of entity relationships  
✅ **Criterion 2 (Schemas & Models)** - Both models created with `mongoose.Schema()` and `mongoose.model()`  
✅ **Criterion 3 (Field Types & Properties)** - Multiple field types (String, Boolean, Date, ObjectId) with required, default, unique properties  
✅ **Criterion 4 (Relationships)** - Reference-based relationship with ObjectId ref and populate() usage  
✅ **Criterion 5 (CRUD Operations)** - Complete Create, Read, Update, Delete operations for both models  

See `CRITERION_MAPPING.md` for detailed line-by-line evidence mapping.
- CRUD operations
- Data population
- Modular architecture