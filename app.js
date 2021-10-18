const express = require('express');
const router = require('./router');
const errHw = require('./middleware/errHw');

const app = express();

app.use(express.json());

app.use('/api', router);

app.use(errHw);

module.exports = app;
