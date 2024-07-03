// https://www.npmjs.com/package/bcrypt
const bcrypt = require("bcrypt")

const myPlaintextPassword = "123456"
const saltRounds = 13

bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  console.log(hash)
})
