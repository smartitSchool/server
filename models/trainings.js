module.exports = (sequelize, DataTypes) => {



    const Trainings = sequelize.define('training', {
        image:{
            type:DataTypes.STRING
        },
        course_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fee: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        technologies: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total_classes: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Trainings;
}