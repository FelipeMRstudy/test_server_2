const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

console.log("Starting server...");

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the server!, Server ON✅' });
  console.log('GET /api/test request received');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  console.log('GET / Ok HTML');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
