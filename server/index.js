const express = require('express');
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send(`
    <h1>FactDen Backend is Working!</h1>
    <p>Try these endpoints:</p>
    <ul>
      <li><a href="/api/status">/api/status</a></li>
      <li>POST /api/factcheck</li>
    </ul>
  `);
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'active', timestamp: new Date() });
});

// Error handling
app.use((err, req, res, next) => {
  console.error('ERROR:', err);
  res.status(500).json({ error: 'Server error' });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('\n=== SERVER STARTED ===');
  console.log(`http://localhost:${PORT}`);
  console.log(`======================\n`);
});
