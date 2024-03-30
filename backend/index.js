const express = require('express');
const bodyParser = require('body-parser');
const loginRoute = require('./routes/login'); // Import login route handler

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/login', loginRoute); // Use login route handler

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
