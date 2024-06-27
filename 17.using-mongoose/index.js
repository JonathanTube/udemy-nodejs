// getting-started.js
const mongoose = require("mongoose")
const Product = require("./models/Product")

const uri =
  "mongodb+srv://Jonathan:yWX4pilcEnbWrXdX@cluster0.xbi8tqo.mongodb.net/mongoose?retryWrites=true&w=majority&appName=Cluster0"

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB")
    createProductSchema()
  })
  .catch((err) => {
    console.log(err)
  })

const createProductSchema = async () => {
  const product = new Product({
    name: "Apple",
    price: 1.5,
    quantity: 100,
    description: "Delicious red fruit"
  })

  await product.save()

  const products = await Product.find()

  //   products.forEach((product) => {
  //     Product.findByIdAndDelete(product.id).then((res) => {
  //       console.log("Deleted product:", product.name, res)
  //     })
  //   })

  await Product.deleteMany({
    name: "Apple"
  })
}
