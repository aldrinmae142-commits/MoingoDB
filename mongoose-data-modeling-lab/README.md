# Mongoose Data Modeling Lab

This lab demonstrates data modeling in MongoDB using Mongoose schemas, including relationships, validations, and CRUD operations.

## Setup

1. Install dependencies: `npm install`
2. Ensure MongoDB is running locally
3. Start the server: `npm start`

## API Endpoints

### Users
- `POST /api/users` - Create user
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Tasks
- `POST /api/tasks` - Create task
- `GET /api/tasks` - Get all tasks (with populated user data)
- `GET /api/tasks/:id` - Get task by ID
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `GET /api/users/:userId/tasks` - Get tasks by user

## Sample Data

Create a user:
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

Create a task:
```json
{
  "title": "Complete project",
  "description": "Finish the data modeling lab",
  "userId": "user_object_id_here"
}
```

## Features Demonstrated

- Mongoose schemas with validations
- Reference-based relationships
- CRUD operations
- Data population
- Modular architecture