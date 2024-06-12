const express = require("express")
const router = express.Router()

// only match post methods
router.get("/form", (req, res, path) => {
  res.send(
    '<form action="/save" method="POST"><input type="text" name="name"><button type="submit">Submit</button></form>'
  )
})

router.post("/save", (req, res, path) => {
  console.log("req.body=", req.body)
  // res.setHeader('Location', '/form') ....
  res.redirect("/form")
})

module.exports = router
