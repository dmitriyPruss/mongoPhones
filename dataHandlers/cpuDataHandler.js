const _ = require('lodash');

module.exports.cpuHandler = (cpuData, phonesData, params) => {
  const CPUWithPhonesData = _.pick(cpuData, params);
  CPUWithPhonesData.phones = phonesData;

  return CPUWithPhonesData;
};
