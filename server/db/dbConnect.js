const { Sequelize } = require('sequelize'); 

const sequelize = new Sequelize('dockertest', 'root', 'IOD-sw-221011', {
    host: '3306',
    dialect: 'mysql'
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