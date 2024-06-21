const express = require("express")

const app = express()
const bodyParser = require("body-parser")

app.set("view engine", "pug")
app.use(bodyParser.urlencoded({ extended: false }))

const users = []

app.get("/", (req, res, next) => {
  res.render("index", {
    pageTitle: "Add User"
  })
})

app.get("/users", (req, res, next) => {
  res.render("users", {
    pageTitle: "User List",
    users: users
  })
})

app.post("/add-user", (req, res, next) => {
  res.redirect("/users")
  users.push({
    name: req.body.username
  })
})

app.listen(3000)
