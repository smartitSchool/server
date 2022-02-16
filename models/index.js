const dbConfig = require('../config/dbconfig.js');
const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false
    }
);


sequelize.authenticate()
    .then(() => {
        console.log('connected')
    })
    .catch((err) => {
        console.log(err)
    })


const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize


db.services = require('./services.js')(sequelize, DataTypes);
db.trainings = require('./trainings.js')(sequelize, DataTypes);
db.orders = require('./orders.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes, re-sync is done!')
    })


module.exports = db