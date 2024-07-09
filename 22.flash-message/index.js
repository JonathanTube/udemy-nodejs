const express = require("express")
const bodyParser = require("body-parser")
const session = require("express-session")

const app = express()

app.use(
  session({
    secret: "key_FOIEF(CVS(E#(#FSF#@",
    resave: true,
    saveUninitialized: true,
  })
)

app.use(bodyParser.urlencoded({ extended: false }))

const flash = require("connect-flash")
app.use(flash())

app.get("/", (req, res) => {
  req.flash("info", "Flash is back!" + new Date().getTime())
  res.redirect("/to")
})

app.get("/to", (req, res) => {
  const info = req.flash("info")
  res.send(info)
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
