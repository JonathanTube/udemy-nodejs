const db = require("../utils/mysql")

const getData = () => {
  db.execute("select * from DEV_LOG")
    .then((res) => {
      const [rows, fields] = res
      console.log(rows)
      console.log(fields)
    })
    .catch((err) => console.error)
}

getData()
