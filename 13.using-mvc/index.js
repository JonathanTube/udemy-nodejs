const express = require("express")

const app = express()

const usersRouter = require("./routes/user.js")
const productRouter = require("./routes/product.js")
const notFoundRouter = require("./routes/404.js")

app.use("/user", usersRouter)
app.use("/product", productRouter)
app.use(notFoundRouter)

app.listen(3000)
