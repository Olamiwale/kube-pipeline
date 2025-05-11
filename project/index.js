const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD pipeline for kubernetes project');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
