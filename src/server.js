const express = require('express');
const bodyParser = require('body-parser');
const tool = require('./tool.js');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  const url = tool.genURL(5);
  res.json({status:"Online", url: url });
})

app.listen(port, () => {
  console.log('Server Active on ', port);
})
