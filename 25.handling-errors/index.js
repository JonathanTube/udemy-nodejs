const express = require("express")
const fs = require("fs")

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
  throw new Error("An error raised.")
})

app.get("/err", (req, res, next) => {
  const err = new Error("There is an error.")
  err.status = 502
  next(err)
})

app.get("/file", (req, res, next) => {
  fs.readFile("not-exist.txt", (err, data) => {
    if (err) {
      // In the callback funciton, you should use next to raise an error.
      next(err)
    } else {
      res.send(data)
    }
  })
})

app.use((err, req, res, next) => {
  // console.error(err.stack)
  res.status(err.status ? err.status : 500).send(err.message)
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
