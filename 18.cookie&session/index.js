//see more about how to use it：https://www.geeksforgeeks.org/session-management-using-express-session-module-in-node-js/
const express = require("express")
// more details about configuration: https://www.npmjs.com/package/express-session
const session = require("express-session")

const app = express()

// Session Setup
app.use(
  session({
    // It holds the secret key for session
    secret: "key_FOIEF(CVS(E#(#FSF#@",
    // Forces the session to be saved
    // back to the session store
    resave: true,
    // Forces a session that is "uninitialized"
    // to be saved to the store
    saveUninitialized: true,
  })
)

app.listen(3000, () => {
  console.log("server is running on port 3000")
})

app.get("/cookie/set", (req, res) => {
  // set path should match with the path of /cookie/set
  res.setHeader("Set-Cookie", "name=zfpx; path=/cookie")
  res.send("hello world")
})

app.get("/cookie/get", (req, res) => {
  // the name=zfpx cookie can be readed by this endpoint
  // because they are under the same path
  const cookie = req.header("Cookie")
  res.send(cookie)
})

app.get("/session/set", (req, res) => {
  req.session.name = "zfpx"
  res.send("ok")
})
app.get("/session/get", (req, res) => {
  const session = req.session
  console.log(session)
  res.send(session)
})
