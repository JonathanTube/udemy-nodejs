const express = require("express")

const router = express.Router()

const notFound = require("../controllers/404.js")

router.use("/", notFound.getNotFound)

module.exports = router
