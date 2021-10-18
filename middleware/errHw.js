const createError = require('http-errors');
const {
  ERRORS: { ERROR_400, ERROR_404, ERROR_500 }
} = require('./../constants');

module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }

  console.error(err.stack);

  res.status(err?.status ?? ERROR_500.ERROR_CODE).send({
    errors: [{ title: err?.message ?? ERROR_500.ERROR_MESSAGE }]
  });
};

module.exports.createErr400 = createError(
  ERROR_400.ERROR_CODE,
  ERROR_400.ERROR_MESSAGE
);

module.exports.createErr404 = createError(
  ERROR_404.ERROR_CODE,
  ERROR_404.ERROR_MESSAGE
);
