// https://www.npmjs.com/package/connect-mongodb-session
const express = require("express")
const session = require("express-session")
var MongoDBStore = require("connect-mongodb-session")(session)

const app = express()

const uri =
  "mongodb+srv://Jonathan:yWX4pilcEnbWrXdX@cluster0.xbi8tqo.mongodb.net/mongoose?retryWrites=true&w=majority&appName=Cluster0"

var store = new MongoDBStore({
  uri,
  collection: "user-sessions",
})

// Catch errors
store.on("error", function (error) {
  console.log(error)
})

app.use(
  require("express-session")({
    secret: "This is a secret",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  })
)

app.get("/session/set", (req, res) => {
  req.session.name = "zfpx"
  res.send("ok")
})
app.get("/session/get", (req, res) => {
  const session = req.session
  res.send(session)
})

app.listen(3000, () => {
  console.log("server is running on port 3000")
})
