const mongoose = require('mongoose');
const { Schema } = mongoose;
const {
  EQUIPMENT_NAME_VALIDATION_SCHEMA,
  FREQUENCY_VALIDATION_SCHEMA
} = require('./../utils/validationSchemas');

const cpuSchema = new Schema(
  {
    _id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true,
      validate: {
        validator: value => EQUIPMENT_NAME_VALIDATION_SCHEMA.isValidSync(value)
      }
    },
    num_of_cores: {
      type: Number,
      required: true,
      enum: {
        values: [4, 6, 8],
        message: 'Wrong value for cores quantity!'
      },
      alias: 'cores'
    },
    frequency: {
      type: String,
      required: true,
      validate: {
        validator: value => FREQUENCY_VALIDATION_SCHEMA.isValidSync(value)
      }
    },
    GPU: {
      type: String,
      required: true,
      minLength: [3, 'Name is too short'],
      maxLength: [42, , 'Name is too long']
    }
  },
  { versionKey: false, _id: false }
);

cpuSchema.index({ name: 1, num_of_cores: 1, frequency: 1 }, { unique: true });

const CPU = mongoose.model('cpus', cpuSchema);

module.exports = CPU;
