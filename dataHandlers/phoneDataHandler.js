const _ = require('lodash');

module.exports.phoneHandler = (data, params) => {
  const phoneData = _.pick(data, params);
  phoneData.screenDiagonal = +data.screenDiagonal;

  return phoneData;
};
