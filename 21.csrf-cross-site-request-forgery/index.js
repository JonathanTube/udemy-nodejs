const express = require("express")
var cookieParser = require("cookie-parser")
var csrf = require("csurf")

var csrfProtection = csrf({ cookie: true })

const app = express()

app.use(cookieParser())

app.get("/", csrfProtection, (req, res) => {
  res.setHeader("Content-Type", "application/json")
  res.send({ csrfToken: req.csrfToken() })
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
