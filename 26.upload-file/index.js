// https://www.npmjs.com/package/multer
// https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md
// https://www.freecodecamp.org/news/simplify-your-file-upload-process-in-express-js/
const express = require("express")
const upload = require("./multer")
const path = require("path")

const app = express()
const port = 3000

app.set("view engine", "ejs")

app.get("/", (req, res, next) => {
  res.render("index", {})
})

app.post("/upload", upload.single("file"), (req, res, next) => {
  console.log(req.file)
  res.json({ code: 201, message: "File uploaded successfully!" })
})

// serve the files in static folder with express.
// https://expressjs.com/en/starter/static-files.html#serving-static-files-in-express
// app.use(express.static('uploads')) // the folder that you want to use in your current project.
app.use("/static", express.static(path.join(__dirname, "uploads"))) // not in your project.

app.use((err, req, res, next) => {
  res.status(err.status ? err.status : 500).send(err.message)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
