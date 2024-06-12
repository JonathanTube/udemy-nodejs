const express = require("express")

const router = express.Router()

// assign another specific path
router.use("/users", (req, res, next) => {
  res.send("<ul><li>Jonathan</li><li>Tom</li></ul>")
})

// assign sepcific path
router.use("/home", (req, res, next) => {
  res.send("<h1>Home</h1>")
})

module.exports = router
