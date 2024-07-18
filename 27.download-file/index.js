// https://www.npmjs.com/package/multer
// https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md
// https://www.freecodecamp.org/news/simplify-your-file-upload-process-in-express-js/
const express = require("express")
const path = require("path")

const app = express()
const port = 3000

app.get("/download", (req, res, next) => {
  res.download(path.join(__dirname, "image.jpeg"), "my-image.jpg")
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
