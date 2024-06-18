const express = require("express")
const path = require("path")

const router = express.Router()

// get folder path of current file.
router.get("/dirname", (req, res, next) => {
  res.send(__dirname)
})

// get full path of current file.
router.get("/filename", (req, res, next) => {
  res.send(__filename)
})

router.get("/appfolder", (req, res, next) => {
  // old method.
  //   res.send(path.dirname(require.main.filename))
  res.send(path.dirname(require.main.filename))
})

module.exports = router
