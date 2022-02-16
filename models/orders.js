module.exports = (sequelize, DataTypes) => {



    const Order = sequelize.define('order', {
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        service_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        customer_email: {
            type: DataTypes.STRING
        },
        order_message: {
            type: DataTypes.TEXT
        },
        customer_contact: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Order;
}