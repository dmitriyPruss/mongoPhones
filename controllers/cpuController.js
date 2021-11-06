const _ = require('lodash');
const { createErr400, createErr404 } = require('./../middleware/errHw');
const { CPU, Phone } = require('./../models');

// CREATE
module.exports.createPhoneByCPU = async (req, res, next) => {
  const {
    body,
    params: { cpuId }
  } = req;

  try {
    body.CPU_id = cpuId;
    const newPhoneInst = new Phone(body);
    const createdPhone = await newPhoneInst.save();

    const newPhone = await CPU.aggregate([
      {
        $match: { _id: +cpuId }
      },
      {
        $project: { _id: 0 }
      }
    ])
      .lookup({
        from: 'phones',
        pipeline: [
          {
            $match: { _id: createdPhone._id }
          },
          {
            $project: {
              _id: 0,
              CPU_id: 0
            }
          }
        ],
        as: 'new_phone'
      })
      .then(([result]) => {
        const {
          new_phone: [newPhone]
        } = result;

        newPhone.screenDiagonal += '';
        newPhone.cpu_params = _.pick(result, [
          'name',
          'num_of_cores',
          'frequency',
          'GPU'
        ]);

        return newPhone;
      });

    if (newPhone) {
      return res.status(200).send({ data: newPhone });
    }

    next(createErr400);
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
    }
    return;
  } catch (error) {
    next(error);
  }
};

// READ
module.exports.getPhonesByCPU = async (req, res, next) => {
  const {
    params: { cpuId }
  } = req;

  try {
    const foundCPUWithPhones = await CPU.aggregate([
      {
        $match: { _id: +cpuId }
      }
    ])
      .lookup({
        from: 'phones',
        pipeline: [
          {
            $match: { CPU_id: +cpuId }
          },
          {
            $project: { _id: 0, CPU_id: 0 }
          }
        ],
        as: 'foundPhones'
      })
      .project({ _id: 0 })
      .then(([result]) => {
        result.foundPhones.map(phone => {
          phone.screenDiagonal = +phone.screenDiagonal;
          return phone;
        });

        return result;
      });

    if (foundCPUWithPhones) {
      return res.status(200).send({ data: foundCPUWithPhones });
    }

    next(createErr404);
  } catch (error) {
    next(error);
  }
};

module.exports.getCPUs = async (req, res, next) => {
  try {
    const foundCPUs = await CPU.find().limit(5);

    if (foundCPUs) {
      res.status(200).send({ data: foundCPUs });
    }
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
