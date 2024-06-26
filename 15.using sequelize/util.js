//see more: https://sequelize.org/docs
const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize("jonathan", "Jonathan", "yajeFYYf2BjCeDCf", {
  host: "140.143.202.23",
  dialect: "mysql",
  define: {
    freezeTableName: true,
  },
})

module.exports = sequelize
