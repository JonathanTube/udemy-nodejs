const express = require("express")
const app = express()

app.set("view engine", "pug")
// if you want to change the default view folder.
// checkout out more about pug(哈巴狗，沙皮狗): https://expressjs.com/en/guide/using-template-engines.html
// app.set("views", "pages")
app.get("/", (req, res) => {
  res.render("index", {
    title: "Hello World",
    message: "This is my first pug page"
  })
})

app.listen(4000)
