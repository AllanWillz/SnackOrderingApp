// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
const loginRoute = require('./routes/login');
app.use('/login', loginRoute);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
