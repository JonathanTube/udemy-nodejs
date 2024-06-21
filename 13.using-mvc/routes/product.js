const express = require("express")

const router = express.Router()

const productController = require("../controllers/product.js")

router.get("/list", productController.getProductList)

module.exports = router
