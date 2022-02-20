module.exports = (sequelize, DataTypes) => {



    const Admission = sequelize.define('admission', {
        avatar: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fathersName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mothersName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        presentAddress: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        permanentAddress: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        DOB: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        bloodGroup: {
            type: DataTypes.TEXT
        },
        gender: {
            type: DataTypes.TEXT
        },
        ocupation: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        nationality: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        phone: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        phone2: {
            type: DataTypes.TEXT
        },
        email: {
            type: DataTypes.TEXT
        },
        gurdianContact: {
            type: DataTypes.TEXT
        },
        gurdianContact2: {
            type: DataTypes.TEXT
        },
        gurdianRelation: {
            type: DataTypes.TEXT
        }
    });

    return Admission;
}