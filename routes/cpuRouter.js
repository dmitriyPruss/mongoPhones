const { Router } = require('express');
const { cpuController } = require('../controllers');

const cpuRouter = Router();

cpuRouter
  .route('/')
  .get(cpuController.getPhonesByCPU, cpuController.getCPUs)
  .post(cpuController.createPhoneByCPU, cpuController.createCPUs);

cpuRouter
  .route('/:cpuId')
  .get(cpuController.getCPUById)
  .patch(cpuController.updateCPUById, cpuController.getCPUById)
  .delete(cpuController.deleteCPUById);

module.exports = cpuRouter;
