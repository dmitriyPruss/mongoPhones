// 'use strict';
// const { Model } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Phone extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate (models) {
//       Phone.belongsTo(models.CPU, {
//         foreignKey: 'CPU_id'
//       });
//     }
//   }
//   Phone.init(
//     {
//       model: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           is: /^[A-Z][a-z0-9]{1,20}$/
//         }
//       },
//       brand: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           is: /^[A-Za-z0-9\s]{1,30}$/
//         }
//       },
//       manufacturedYear: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         validate: {
//           min: 2010,
//           max: new Date().getFullYear()
//         }
//       },
//       RAMsize: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         validate: {
//           isIn: [[1, 2, 3, 4, 6, 8, 16, 32, 64]]
//         }
//       },
//       CPUname: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           is: /^[A-Za-z0-9\s]{1,30}$/
//         }
//       },
//       screenDiagonal: {
//         type: DataTypes.DECIMAL,
//         allowNull: false,
//         validate: {
//           min: 2.5,
//           max: 7.6
//         }
//       },
//       isNFC: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: true
//       }
//     },
//     {
//       indexes: [
//         {
//           name: 'Phone_spec',
//           unique: true,
//           fields: ['model', 'brand', 'manufacturedYear', 'RAMsize']
//         }
//       ],
//       sequelize,
//       modelName: 'Phone'
//     }
//   );
//   return Phone;
// };
