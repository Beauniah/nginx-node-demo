const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js backend! Test test test  blaha blaha blaha test test');
  res.send('Hello from Node.js backend! Test test test  blaha blaha blaha');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});