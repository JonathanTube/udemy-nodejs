const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hello World",
  })
})

app.listen(4000)
