
// const express = require('express');
// const path = require('path');
// const app = express();
// const port = process.env.PORT || 3000;

// console.log("Starting server...");
// console.log("Starting server...");
// console.log("Starting server...");
// console.log("Starting server...");
// console.log("Starting server...");
// console.log("Starting server...");
// console.log("Starting server...");

// app.use(express.static(path.join(__dirname, '..', 'public')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
//   console.log('GET / Ok HTML');
// });

// app.get('/api/test', (req, res) => {
//   res.json({ message: 'Hello from the server!, Server ON✅' });
//   console.log('GET /api/test request received');
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });



console.log("Empezo la fiesta, Starting server...");
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

console.log("Starting server...");

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/test', (req, res) => {
  console.log("Siguio la fiesta, Starting server...");
  res.json({ message: 'Hello from the server!, Server ON✅' });
  console.log('GET /api/test request received');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
