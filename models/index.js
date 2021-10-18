const mongoose = require('mongoose');
const CONSTANTS = require('./../constants');

const env = process.env.NODE_ENV ?? CONSTANTS.PROCESS_DEV;
const config = require('./../config/db')[env];

mongoose
  .connect(`${CONSTANTS.DBMS}://${config.host}:${config.port}/${config.dbName}`)
  .then(data => console.log(`Connect with ${CONSTANTS.DBMS}`))
  .catch(err => console.log(`err`, err));

module.exports.Phone = require('./phone');
module.exports.CPU = require('./cpu');
