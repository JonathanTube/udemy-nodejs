const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const formRouter = require("./routes/form")
const userRouter = require("./routes/user")

app.use(bodyParser.urlencoded({ extended: false }))

app.use(formRouter)
// I should put userRouter at the bottom, becase '/' route exists in in user router.
// otherwise all of the requests will be intercepted.
app.use(userRouter)

// add a default middleware to intercept 404 requests
app.use((req, res, next) => {
  // status, not statusCode!
  res.status(404).send("page not found")
})
app.listen(3000)
