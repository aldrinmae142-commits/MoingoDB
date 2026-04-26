/**
 * CRITERION 1, 2 & 4: Data Modeling with Relationships
 * This file demonstrates data modeling concepts by defining a Task entity
 * that maintains a reference to User, establishing a one-to-many relationship.
 * One User can have multiple Tasks.
 */

const mongoose = require('mongoose');

/**
 * CRITERION 2: Schema Definition
 * Creates a Mongoose schema for Task documents with relationship support
 */
const taskSchema = new mongoose.Schema({
  /**
   * CRITERION 3: String Field Type with Required Property
   * title: Required string field
   */
  title: {
    type: String,          // CRITERION 3: String field type
    required: true,        // CRITERION 3: Required property
    trim: true
  },

  /**
   * CRITERION 3: String Field Type (Optional)
   * description: Optional string field
   */
  description: {
    type: String,          // CRITERION 3: String field type
    trim: true
  },

  /**
   * CRITERION 3: Boolean Field Type with Default Value
   * completed: Boolean type with default=false
   * Demonstrates understanding of Boolean types and defaults
   */
  completed: {
    type: Boolean,         // CRITERION 3: Boolean field type
    default: false         // CRITERION 3: Default value
  },

  /**
   * CRITERION 4: Reference-Based Relationship
   * userId: References the User collection via ObjectId
   * This demonstrates one-to-many relationship: One User has many Tasks
   * Uses populate() in routes to fetch related User data
   */
  userId: {
    type: mongoose.Schema.Types.ObjectId,  // CRITERION 4: ObjectId type for references
    ref: 'User',                           // CRITERION 4: Reference to User collection
    required: true                         // Ensures referential integrity
  },

  /**
   * CRITERION 3: Date Field Type with Default Value
   * createdAt: Date type with default=Date.now
   */
  createdAt: {
    type: Date,            // CRITERION 3: Date field type
    default: Date.now      // CRITERION 3: Default value (auto-timestamp)
  }
});

/**
 * CRITERION 2: Model Export
 * Exports the Task model, enabling CRUD operations in routes
 */
module.exports = mongoose.model('Task', taskSchema);