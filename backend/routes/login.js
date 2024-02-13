// routes/login.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are correct (dummy example)
  if (email === 'allan@gmail.com' && password === 'allan.') {
    // Authentication successful
    res.status(200).json({ success: true, message: 'Login successful' });
  } else {
    // Authentication failed
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

module.exports = router;
