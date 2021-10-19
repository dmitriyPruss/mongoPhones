const { createErr400, createErr404 } = require('./../middleware/errHw');
const { CPU } = require('./../models');
const { PHONE_PROPS } = require('./../constants');
const { dataPhoneHandler } = require('./../dataHandlers/phoneDataMw');

// CREATE
module.exports.createPhoneByCPU = async (req, res, next) => {
  const { body } = req;
  try {
    if (!Array.isArray(body)) {
      // const newPhoneInst = new Phone(body);
      // const createdPhone = await newPhoneInst.save();

      // if (createdPhone) {
      //   return res.status(200).send({ data: createdPhone });
      // }
      next(createErr400);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports.createCPUs = async (req, res, next) => {
  const { body } = req;

  try {
    if (Array.isArray(body)) {
      const createdCPUs = await CPU.create(body);

      if (createdCPUs) {
        return res.status(200).send({ data: createdCPUs });
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
module.exports.getPhonesByCPU = async (req, res, next) => {
  try {
    // const foundCPUs = await CPU.find().limit(5);
    // res.status(200).send({ data: foundCPUs });
  } catch (error) {
    next(error);
  }
};

module.exports.getCPUs = async (req, res, next) => {
  try {
    const foundCPUs = await CPU.find().limit(5);

    res.status(200).send({ data: foundCPUs });
  } catch (error) {
    next(error);
  }
};

module.exports.getCPUById = async (req, res, next) => {
  const {
    params: { cpuId }
  } = req;

  try {
    const foundCPU = await CPU.findById(cpuId);

    if (foundCPU) {
      return res.status(200).send({ data: foundCPU });
    }
    next(createErr404);
  } catch (error) {
    next(error);
  }
};

// UPDATE
module.exports.updateCPUById = async (req, res, next) => {
  const {
    params: { cpuId },
    body
  } = req;

  try {
    const updatedCPU = await CPU.findByIdAndUpdate(cpuId, body);

    if (updatedCPU) {
      return next();
    }

    next(createErr404);
  } catch (error) {
    next(error);
  }
};

// DELETE
module.exports.deleteCPUById = async (req, res, next) => {
  const {
    params: { cpuId }
  } = req;

  try {
    const deletedCPU = await CPU.findByIdAndDelete(cpuId);

    if (deletedCPU) {
      return res.status(200).send({ data: deletedCPU });
    }

    next(createErr404);
  } catch (error) {
    next(error);
  }
};
