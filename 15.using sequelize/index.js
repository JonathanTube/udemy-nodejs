import { DataType } from "sequelize"
import sequelize from "./util"

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: "this is a id",
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})
// User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
// User.sync({ force: true }) - This creates the table, dropping it first if it already existed
// User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
sequelize.sync({ alter: true }).then((res) => {
  const user = User.build({
    name: "Jonathan",
  })
  user.save()

  User.findOne({ where: { name: "Jonathan" } }).then((user) => {
    user.name = "Erin"
    user.save()
  })

  User.findAll({
    where: {
      name: "Jonathan",
    },
  }).then((users) => {
    users.forEach((user) => user.destroy())
  })
})
