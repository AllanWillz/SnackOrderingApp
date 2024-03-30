const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'SnackAttack',
  password: 'Allan@5000',
  database: 'snackdb'
});

// Connect to MySQL (omit if you're already connected in index.js)
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Create a table to store user credentials if it doesn't exist (omit if the table already exists)
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  )
`;
connection.query(createTableQuery, (err, result) => {
  if (err) {
    console.error('Error creating users table:', err);
    return;
  }
  console.log('Users table created or already exists');
});

// Handle login POST request
router.post('/', (req, res) => {
  const { email, password } = req.body;

  // Insert user credentials into the database
  const insertQuery = 'INSERT INTO users (email, password) VALUES (?, ?)';
  connection.query(insertQuery, [email, password], (err, result) => {
    if (err) {
      console.error('Error inserting user credentials:', err);
      res.status(500).json({ success: false, message: 'An error occurred while saving credentials' });
      return;
    }
    console.log('User credentials saved successfully');

    // Provide access in the app (for demonstration purposes, just return success)
    res.status(200).json({ success: true, message: 'Login successful' });
  });
});

module.exports = router;
