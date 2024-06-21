const fs = require("fs")
const path = require("path")

module.exports = class Product {
  constructor() {}

  static getProductListFromFile(cb) {
    const appFilePath = require.main.filename
    console.log("get path of index.js =", appFilePath)
    const rootFolder = path.dirname(appFilePath)
    console.log("get project root folder=", rootFolder)
    fs.readFile(path.join(rootFolder, "data", "products.json"), (err, data) => {
      if (err) {
        cb([])
      } else {
        cb(JSON.parse(data))
      }
    })
  }
}
