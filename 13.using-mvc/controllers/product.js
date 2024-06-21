// module.exports == exports

const Product = require("../modules/product.js")

exports.getProductList = (req, res, next) => {
  Product.getProductListFromFile((products) => {
    debugger
    console.log(products)
    res.header("Content-Type", "application/json")
    res.status(200).send(products)
  })
}
