const express = require("express")
const bodyParser = require("body-parser")
const feedRouter = require("./routes/feed")

const app = express()

app.use(bodyParser.json())

// solve cors(cross origin resource sharing) problem.
app.use((req, res, next) => {
  // allows all domain, you can also add multiple domain spitted by commas.
  req.setHeader("Access-Control-Allow-Origin", "*")
  // all all method with *
  req.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
  // allow which content in header are allowed to pass to backend endpoint.
  req.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
})

app.use("/feed", feedRouter)

app.listen("3000", () => {
  console.log("server started.")
})
