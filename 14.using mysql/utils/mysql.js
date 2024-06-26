//See more:  https://sidorares.github.io/node-mysql2/docs
const mysql = require("mysql2")

const pool = mysql.createPool({
  host: "140.143.202.23",
  user: "fs_dev_mgt",
  password: "fs_dev_mgt",
  database: "fs_dev_mgt",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 2000,
})

module.exports = pool.promise()
