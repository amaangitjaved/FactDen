require('dotenv').config();
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start Server
const PORT = 3001; // This port is confirmed available
console.log.app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});