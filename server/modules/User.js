const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Model extends Sequelize.Model { }
  Model.init({
    // attributes
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [8, 40]
      }
      // allowNull defaults to true
    }
  }, {
    sequelize,
    modelName: 'User'
    // options
  })
  return Model
}
