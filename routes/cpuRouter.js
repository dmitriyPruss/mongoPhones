const { Router } = require('express');
const { cpuController } = require('../controllers');

const cpuRouter = Router();

cpuRouter
  .route('/')
  .get(cpuController.getCPUs)
  .post(cpuController.createCPUs);

cpuRouter
  .route('/:cpuId')
  .get(cpuController.getCPUById)
  .patch(cpuController.updateCPUById, cpuController.getCPUById)
  .delete(cpuController.deleteCPUById);

cpuRouter
  .route('/:cpuId/phones')
  .get(cpuController.getPhonesByCPU)
  .post(cpuController.createPhoneByCPU);
module.exports = cpuRouter;
