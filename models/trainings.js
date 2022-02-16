module.exports = (sequelize, DataTypes) => {



    const Trainings = sequelize.define('training', {
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