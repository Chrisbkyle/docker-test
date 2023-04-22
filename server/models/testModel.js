const { DataTypes, Model } = require('sequelize')
let dbConnect = require('../db/dbConnect')
const sequelizeInstance = dbConnect.Sequlize;

class testForm extends Model {}

testForm.init({
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
}, {sequelize: sequelizeInstance, modelName: 'testForm', timestamps: false, freezeTableName: true })

module.exports = testForm