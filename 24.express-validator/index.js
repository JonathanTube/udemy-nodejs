// https://express-validator.github.io/docs
const express = require("express")
const { query, validationResult } = require("express-validator")

const app = express()
app.use(express.json())

app.get("/get", query("id").notEmpty(), (req, res) => {
  const result = validationResult(req)
  console.log("result=", result)
  console.log("result.errors=", result.errors)
  if (result.errors.length > 0) {
    return res.status(422).json({
      success: false,
      message: "Validation failed",
      errors: result.errors,
    })
  }

  res.json({
    success: true,
    message: "Data saved successfully",
  })
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
