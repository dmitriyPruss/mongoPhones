const _ = require('lodash');
const { createErr400, createErr404 } = require('./../middleware/errHw');
const { Phone } = require('./../models');

const phoneProps = [
  '_id',
  'model',
  'brand',
  'manufacturedYear',
  'RAMsize',
  'CPUname',
  'isNFC'
];

// CREATE
module.exports.createPhone = async (req, res, next) => {
  const { body } = req;
  try {
    const newPhoneInst = new Phone(body);
    const createdPhone = await newPhoneInst.save();

    if (createdPhone) {
      return res.status(200).send({ data: createdPhone });
    }
    next(createErr400);
  } catch (error) {
    next(error);
  }
};

// READ
module.exports.getPhones = async (req, res, next) => {
  try {
    const foundPhones = await Phone.find().limit(5);

    const foundPhonesData = foundPhones.map(foundPhone => {
      const foundPhoneData = _.pick(foundPhone, phoneProps);
      foundPhoneData.screenDiagonal = +foundPhone.screenDiagonal;

      return foundPhoneData;
    });

    res.status(200).send({ data: foundPhonesData });
  } catch (error) {
    next(error);
  }
};

module.exports.getPhoneById = async (req, res, next) => {
  const {
    params: { phoneId }
  } = req;

  try {
    const foundPhone = await Phone.findById(phoneId);

    if (foundPhone) {
      const phoneData = _.pick(foundPhone, phoneProps);
      phoneData.screenDiagonal = +foundPhone.screenDiagonal;

      return res.status(200).send({ data: phoneData });
    }
    next(createErr404);
  } catch (error) {
    next(error);
  }
};

// UPDATE
module.exports.updatePhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
    body
  } = req;

  try {
    const updatedPhone = await Phone.findByIdAndUpdate(phoneId, body);

    if (updatedPhone) {
      return next();
    }

    next(createErr404);
  } catch (error) {
    next(error);
  }
};

// DELETE
module.exports.deletePhoneById = async (req, res, next) => {
  const {
    params: { phoneId }
  } = req;

  try {
    const deletedPhone = await Phone.findByIdAndDelete(phoneId);

    if (deletedPhone) {
      return res.status(200).send({ data: deletedPhone });
    }

    next(createErr404);
  } catch (error) {
    next(error);
  }
};
