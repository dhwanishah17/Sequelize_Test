
module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define("Team", {
        name: {
            type: DataTypes.STRING,
        },
    });
    return Team;
}