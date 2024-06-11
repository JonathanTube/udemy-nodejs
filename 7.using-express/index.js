// import the express lib.
const express = require("express")
const bodyParser = require("body-parser")

// create an instance of express.
const app = express()
// 自 Express 4.16.0 版本起，Express 增加了内置的 bodyParser 支持，可以直接使用 express.json()
// 和 express.urlencoded() 而不必单独安装 body-parser。例如：
// 相当于 body-parser 的 json 和 urlencoded
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  console.log(req.url)
  console.log("first middleware")
  // to jump to the next middleware
  next()
})

// using a middleware
app.use((req, res, next) => {
  console.log("second middleware")
  //   response html code to browser.
  //   res.send("<h1>hello world</h1>")
  next()
})

// assign another specific path
app.use("/users", (req, res, next) => {
  res.send("<ul><li>Jonathan</li><li>Tom</li></ul>")
})

// only match post methods
app.post("/form", (req, res, path) => {
  res.send(
    '<form action="/save" method="POST"><input type="text" name="name"><button type="submit">Submit</button></form>'
  )
})

app.use("/save", (req, res, path) => {
  console.log("req.body=", req.body)
  // res.setHeader('Location', '/form') ....
  res.redirect("/form")
})

// assign sepcific path
app.use("/", (req, res, next) => {
  res.send("<h1>Home</h1>")
})

app.listen(3000)
