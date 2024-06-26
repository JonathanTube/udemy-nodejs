const express = require("express")

const router = express.Router()

const userController = require("../controllers/user.js")

router.get("/list", userController.getUserList)
router.get("/detail/:id", userController.getUserDetail)

module.exports = router
