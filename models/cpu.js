// 'use strict';
// const { Model } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class CPU extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate (models) {
//       CPU.hasMany(models.Phone, {
//         foreignKey: 'CPU_id',
//         onUpdate: 'CASCADE',
//         onDelete: 'RESTRICT'
//       });
//     }
//   }
//   CPU.init(
//     {
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           is: /^[A-Za-z0-9\s]{1,30}$/
//         }
//       },
//       num_of_cores: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         validate: {
//           isIn: {
//             args: [[4, 6, 8]],
//             msg: 'Wrong value for cores quantity!'
//           }
//         }
//       },
//       frequency: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           contains: 'GHz'
//         }
//       },
//       GPU: {
//         type: DataTypes.STRING,
//         allowNull: false
//       }
//     },
//     {
//       indexes: [
//         {
//           name: 'CPU_spec',
//           unique: true,
//           fields: ['name', 'num_of_cores', 'frequency']
//         }
//       ],
//       sequelize,
//       modelName: 'CPU'
//     }
//   );
//   return CPU;
// };
