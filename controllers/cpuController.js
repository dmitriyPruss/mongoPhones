// const { CPU, Phone } = require('../models');
// const _ = require('lodash');

// module.exports.getCPUs = async (req, res, next) => {
//   try {
//     if (req.query.processorId) {
//       const {
//         query: { processorId }
//       } = req;

//       // const [sortedCPU] = await CPU.findAll({
//       //   raw: true,
//       //   attributes: {
//       //     exclude: ['id', 'createdAt', 'updatedAt']
//       //   },
//       //   where: { id: processorId },
//       //   limit: 3
//       // });

//       // const sortedPhones = await sortedCPU.getPhones();
//       // console.log(`sortedPhones`, sortedPhones);

//       const sortedPhones = await Phone.findAll({
//         raw: true,
//         attributes: {
//           exclude: ['id', 'createdAt', 'updatedAt', 'CPU_id']
//         },
//         where: { CPU_id: processorId }
//       });

//       res.status(200).send(sortedPhones);
//     }

//     const foundCPUs = await CPU.findAll({
//       raw: true,
//       attributes: {
//         exclude: ['id', 'createdAt', 'updatedAt']
//       },
//       limit: 3
//     });

//     res.status(200).send(foundCPUs);
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports.createPhoneByCPU = async (req, res, next) => {
//   const { body } = req;

//   try {
//     if (req.query.processorId) {
//       const {
//         query: { processorId }
//       } = req;

//       const [selectedCPU] = await CPU.findAll({
//         raw: true,
//         where: { id: processorId }
//       });

//       body.CPUname = selectedCPU.name;
//       body.CPU_id = processorId;

//       // const createdPhone2 = await selectedCPU.createPhone(body);
//       // console.log(`createdPhone2`, createdPhone2);
//     }

//     const createdPhone = await Phone.create(body);
//     const sendedPhone = _.omit(createdPhone.get(), [
//       'id',
//       'createdAt',
//       'updatedAt'
//     ]);

//     res.status(200).send(sendedPhone);
//   } catch (error) {
//     next(error);
//   }
// };
