module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define("User", {
        userName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    User.prototype.validPassword = function(password) {
        return (this.password === password)
      };

    return User
}