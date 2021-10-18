const CONSTANTS = require('./../constants');

module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }

  console.error(err.stack);

  res.status(err?.status ?? CONSTANTS.ERROR_500.ERROR_CODE).send({
    errors: [{ title: err?.message ?? CONSTANTS.ERROR_500.ERROR_MESSAGE }]
  });
};
