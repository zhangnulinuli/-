const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Model extends Sequelize.Model { }
  Model.init({
    // attributes
    name: {
      type: DataTypes.STRING
    },
    poster: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    sequelize,
    modelName: 'Movie'
    // options
  })
  return Model
}
