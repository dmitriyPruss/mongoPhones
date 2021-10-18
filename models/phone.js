const mongoose = require('mongoose');
const { Schema } = mongoose;
const {
  MODEL_VALIDATION_SCHEMA,
  EQUIPMENT_NAME_VALIDATION_SCHEMA
} = require('./../utils/validationSchemas');

const phoneSchema = new Schema({
  model: {
    type: String,
    validate: {
      validator: value => MODEL_VALIDATION_SCHEMA.isValidSync(value)
    }
  },
  brand: {
    type: String,
    required: true,
    validate: {
      validator: value => EQUIPMENT_NAME_VALIDATION_SCHEMA.isValidSync(value)
    }
  },
  manufacturedYear: {
    type: Number,
    required: true,
    min: [2009, 'It is too early'],
    max: [new Date().getFullYear(), 'This year hasn`t yet come'],
    alias: 'prodYear'
  },
  RAMsize: {
    type: Number,
    required: true,
    enum: {
      values: [1, 2, 3, 4, 6, 8, 16, 32, 64],
      message: 'Value insn`t supported'
    }
  },
  CPUname: {
    type: String,
    required: true,
    validate: {
      validator: value => EQUIPMENT_NAME_VALIDATION_SCHEMA.isValidSync(value)
    }
  },
  screenDiagonal: {
    type: Schema.Types.Decimal128,
    required: true,
    set: value => Number(value.toFixed(1)),
    min: [2.5, 'Value is too small!'],
    max: [7.6, 'Value is too large!']
  },
  isNFC: {
    type: Boolean,
    default: true
  }
});

const Phone = mongoose.model('phones', phoneSchema);

module.exports = Phone;
