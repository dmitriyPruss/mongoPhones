const { createErr400, createErr404 } = require('./../middleware/errHw');
const { Phone } = require('./../models');
const { PHONE_PROPS } = require('./../constants');
const { phoneHandler } = require('./../dataHandlers/phoneDataHandler');

// CREATE
module.exports.createPhone = async (req, res, next) => {
  const { body } = req;
  try {
    if (!Array.isArray(body)) {
      const newPhoneInst = new Phone(body);
      const createdPhone = await newPhoneInst.save();

      if (createdPhone) {
        return res.status(200).send({ data: createdPhone });
      }
      next(createErr400);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports.createPhones = async (req, res, next) => {
  const { body } = req;
  try {
    if (Array.isArray(body)) {
      const createdPhones = await Phone.create(body);

      if (createdPhones) {
        return res.status(200).send({ data: createdPhones });
      }
      next(createErr400);
    } else {
      return;
    }
  } catch (error) {
    next(error);
  }
};

// READ
module.exports.getPhones = async (req, res, next) => {
  try {
    const foundPhones = await Phone.find().limit(7);

    const foundPhonesData = foundPhones.map(foundPhone =>
      phoneHandler(foundPhone, PHONE_PROPS)
    );

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
      const phoneData = phoneHandler(foundPhone, PHONE_PROPS);

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
