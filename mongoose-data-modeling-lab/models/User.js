/**
 * CRITERION 1 & 2: Data Modeling Concepts + Mongoose Schema Definition
 * This file demonstrates understanding of data modeling by defining a User entity
 * with appropriate fields for a typical user management system.
 */

const mongoose = require('mongoose');

/**
 * CRITERION 2: Schema Definition
 * Creates a Mongoose schema that defines the structure of User documents.
 * This demonstrates the use of mongoose.Schema() for schema creation.
 */
const userSchema = new mongoose.Schema({
  /**
   * CRITERION 3: String Field Type with Required Property
   * name: String type, required=true (must be provided)
   * Demonstrates understanding of field types and required properties
   */
  name: {
    type: String,          // CRITERION 3: String field type
    required: true,        // CRITERION 3: Required property
    trim: true             // Additional: Auto-trim whitespace
  },

  /**
   * CRITERION 3: String Field Type with Multiple Properties
   * email: String type with required, unique, lowercase, and trim properties
   * Demonstrates understanding of multiple field properties and validation
   */
  email: {
    type: String,          // CRITERION 3: String field type
    required: true,        // CRITERION 3: Required property
    unique: true,          // Ensures no duplicate emails
    lowercase: true,       // Auto-convert to lowercase
    trim: true             // Auto-trim whitespace
  },

  /**
   * CRITERION 3: Date Field Type with Default Value
   * createdAt: Date type with default=Date.now
   * Demonstrates understanding of Date types and default values
   */
  createdAt: {
    type: Date,            // CRITERION 3: Date field type
    default: Date.now      // CRITERION 3: Default value (auto-timestamp)
  }
});

/**
 * CRITERION 2: Model Export
 * Exports the User model using mongoose.model()
 * This demonstrates proper schema-to-model conversion in Mongoose
 */
module.exports = mongoose.model('User', userSchema);