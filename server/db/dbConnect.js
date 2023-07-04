const { Sequelize } = require('sequelize'); 
require('dotenv').config();  

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {  
        host: process.env.DB_HOST || db,
        dialect: 'mysql',
        port: process.env.DB_PORT
});

const connectMySQL = async  () => {   
    try {
        await sequelize.authenticate();
        console.log('mySQL database connected')
    } catch (error) {
        console.error('Unable to connect: ', error)
    }
}

module.exports = {
    Sequlize: sequelize,
    connectMySQL
}  