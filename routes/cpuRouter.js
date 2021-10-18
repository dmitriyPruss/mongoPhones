const { Router } = require('express');
const { cpuController } = require('../controllers');

const cpuRouter = Router();

// cpuRouter
//   .route('/')
//   .get(cpuController.getCPUs)
//   .post(cpuController.createPhoneByCPU);

module.exports = cpuRouter;
