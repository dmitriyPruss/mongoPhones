const CONSTANTS = require('./../constants');

module.exports = {
  development: {
    host: CONSTANTS.HOST,
    port: CONSTANTS.MONGO_PORT,
    dbName: CONSTANTS.DATABASE_CURRENT_NAME
  }
};
