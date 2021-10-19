const yup = require('yup');

const createValidScheme = regStr =>
  yup
    .string()
    .matches(regStr, 'Wrong symbols!')
    .required('This field must not be empty!');

module.exports.MODEL_VALIDATION_SCHEMA = createValidScheme(
  /^[A-Z][a-z0-9]{1,20}$/
);
module.exports.EQUIPMENT_NAME_VALIDATION_SCHEMA = createValidScheme(
  /^[A-Za-z0-9\s]{1,30}$/
);
module.exports.FREQUENCY_VALIDATION_SCHEMA = createValidScheme(
  /^([\d\s\+\.,x]{1,50}(GHz)+){1,6}$/
);
