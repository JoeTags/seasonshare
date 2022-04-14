const path = require('path');
const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');

//const api = require('./routes/api');

const app = express();



app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'dist')));

//app.use('/v1', api);

app.get('/', (req, res) => {
  console.log("hey")
})

module.exports = app;