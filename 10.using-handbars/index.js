const express = require("express")
// see more from this link: https://www.npmjs.com/package/express-handlebars
const { engine } = require("express-handlebars")

const app = express()
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

app.get("/", (req, res) => {
  res.render("index", {
    title: "hello world"
  })
})

app.listen(4000, () => {
  console.log("listening on 4000")
})
