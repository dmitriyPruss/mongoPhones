const { Router } = require('express');
const { phoneController } = require('./../controllers');

const phoneRouter = Router();

phoneRouter
  .route('/')
  .get(phoneController.getPhones)
  .post(phoneController.createPhone);

phoneRouter
  .route('/:phoneId')
  .get(phoneController.getPhoneById)
  .patch(phoneController.updatePhoneById, phoneController.getPhoneById)
  .delete(phoneController.deletePhoneById);

module.exports = phoneRouter;
