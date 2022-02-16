module.exports = (sequelize, DataTypes) => {



    const Service = sequelize.define('service', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        technologies:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Service;
}