module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define("Player", {
        name: {
            type: DataTypes.STRING,
            require: true
        },
        age: {
            type: DataTypes.INTEGER,
        },
        captain: {
            type: DataTypes.STRING,
        },
        dob: {
            type: DataTypes.DATE,
        }
    });
    return Player;
}