const express = require('express');
const bodyParser = require('body-parser');
const tool = require('./tool.js');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  const url = tool.genURL(5);
  res.json({ url: url });
})

app.listen(3000, () => {
  console.log('Server Active on 3000');
})
