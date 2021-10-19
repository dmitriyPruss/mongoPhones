const _ = require('lodash');

module.exports.dataPhoneHandler = (data, params) => {
  const phoneData = _.pick(data, params);
  phoneData.screenDiagonal = +data.screenDiagonal;

  return phoneData;
};
